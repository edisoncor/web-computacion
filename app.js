'use strict';
const data = window.CARRERA;
const $ = selector => document.querySelector(selector);
const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const areaNames = {basica:'Unidad básica',profesional:'Unidad profesional',integracion:'Integración curricular'};
const formatNumber = n => new Intl.NumberFormat('es-EC').format(n);
$('#career-name').textContent = data.name;
$('#facts').innerHTML = data.facts.map(([icon,label,value]) => `<div><span class="fact-icon">${icon}</span><strong>${escapeHtml(label)}</strong><small>${escapeHtml(value)}</small></div>`).join('');
$('#profiles').innerHTML = data.profiles.map(([icon,title,body],i) => `<article class="profile"><span class="profile-icon icon-${i}">${icon}</span><div><h3>${escapeHtml(title)}</h3><p>${escapeHtml(body)}</p></div></article>`).join('');
$('#experience-links').innerHTML = data.experience.map(([icon,title],i) => `<button data-info="${i}"><span>${icon}</span>${escapeHtml(title)}</button>`).join('');
let selectedId = null;
function visibleSubjects() { return data.subjects.filter(s => s.route === 'all' || s.route === $('#track-select').value); }
function renderCurriculum() {
 const query = $('#subject-search').value.trim().normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 const area = $('#area-label').hidden ? 'all' : $('#area-filter').value;
 const subjects = visibleSubjects();
 const matching = s => (area === 'all' || s.area === area) && `${s.name} ${s.id}`.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().includes(query);
 const selected = subjects.find(s => s.id === selectedId);
 $('#curriculum').innerHTML = Array.from({length:data.cycles},(_,i) => {
  const rows = subjects.filter(s => s.cycle === i+1 && matching(s));
  return `<div class="cycle"><h3>${i+1}.° Ciclo <small>${data.creditsPerCycle} créditos · ${data.hoursPerCycle} h</small></h3><div class="cycle-subjects">${rows.map(s => `<button class="subject ${s.area} ${s.route !== 'all' ? 'itinerario' : ''} ${s.id===selectedId?'selected':''} ${selected?.prerequisites.includes(s.id)?'prerequisite':''} ${s.prerequisites.includes(selectedId)?'dependent':''}" data-subject="${s.id}" aria-pressed="${s.id===selectedId}"><span>${escapeHtml(s.name)}</span><small>${formatNumber(s.credits)} cr.</small></button>`).join('') || '<p class="no-results">Sin coincidencias</p>'}</div></div>`;
 }).join('');
 scheduleConnections();
 $('#result-count').textContent = `${subjects.filter(matching).length} asignaturas visibles. Selecciona una asignatura para consultar sus datos. Los créditos individuales se muestran con el redondeo del PDF.`;
}
let connectionFrame;
function scheduleConnections() {
 cancelAnimationFrame(connectionFrame);
 connectionFrame = requestAnimationFrame(drawConnections);
}
function drawConnections() {
 const svg = $('#curriculum-connections');
 const canvas = $('.curriculum-canvas');
 const show = $('#show-connections').checked;
 svg.hidden = !show;
 if (!show) { svg.innerHTML=''; $('#connection-status').textContent='Conexiones ocultas.'; return; }
 const rect = canvas.getBoundingClientRect();
 const width = canvas.scrollWidth;
 const height = canvas.scrollHeight;
 svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
 svg.setAttribute('width', width); svg.setAttribute('height',height);
 const nodes = new Map(Array.from($('#curriculum').querySelectorAll('[data-subject]'),node=>[node.dataset.subject,node]));
 const paths=[];
 let hidden=0;
 const relations=visibleSubjects().flatMap(s=>s.prerequisites.map(id=>({from:id,to:s.id,type:'prerequisite'})).concat((s.corequisites || []).map(id=>({from:id,to:s.id,type:'corequisite'}))));
 for (const [index,edge] of relations.entries()) {
  const from=nodes.get(edge.from), to=nodes.get(edge.to);
  if (!from || !to) { if(edge.from===selectedId || edge.to===selectedId)hidden++; continue; }
  const a=from.getBoundingClientRect(), b=to.getBoundingClientRect();
  const incoming=edge.to===selectedId, outgoing=edge.from===selectedId;
  const active=incoming || outgoing;
  const forward=b.left>a.left;
  const x1=(forward?a.right:a.left)-rect.left;
  const x2=(forward?b.left:b.right)-rect.left;
  const y1=a.top+a.height/2-rect.top;
  const y2=b.top+b.height/2-rect.top;
  const source=data.subjects.find(s=>s.id===edge.from), target=data.subjects.find(s=>s.id===edge.to);
  let path;
  if(Math.abs(target.cycle-source.cycle)===1) {
   const mid=(x1+x2)/2;
   path=`M ${x1} ${y1} H ${mid} V ${y2} H ${x2}`;
  } else {
   // Cross-cycle connections travel above the cards; the overlay stays below buttons.
   const sign=forward?1:-1, offset=6;
   const lane=8+(index%5)*4;
   path=`M ${x1} ${y1} H ${x1+sign*offset} V ${lane} H ${x2-sign*offset} V ${y2} H ${x2}`;
  }
  const kind=incoming?'incoming':outgoing?'outgoing':'neutral';
  paths.push({active,html:`<path class="connection ${kind} ${edge.type} ${selectedId&&!active?'muted':''}" d="${path}" marker-end="url(#arrow-${kind})"><title>${escapeHtml(source.name)} → ${escapeHtml(target.name)}</title></path>`});
 }
 paths.sort((a,b)=>Number(a.active)-Number(b.active));
 svg.innerHTML=`<defs>${['neutral','incoming','outgoing'].map(kind=>`<marker id="arrow-${kind}" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path class="arrow-${kind}" d="M 0 0 L 8 4 L 0 8 Z"/></marker>`).join('')}</defs>`+paths.map(p=>p.html).join('');
 $('#connection-status').textContent=selectedId ? `Relaciones resaltadas: azul, prerrequisitos; verde, asignaturas que requieren esta materia.${hidden ? ` ${hidden} relación(es) no visibles por los filtros actuales.` : ''}` : `${paths.length} conexiones visibles entre las asignaturas. Las relaciones se transcribieron del PDF.`;
}
$('#show-connections').addEventListener('change',scheduleConnections);
new ResizeObserver(scheduleConnections).observe($('#curriculum'));
window.addEventListener('resize',scheduleConnections);
if(document.fonts)document.fonts.ready.then(scheduleConnections);
function academicHelp(code, label = code) {
 const definition = data.componentLegend.find(([key]) => key === code)?.[1] || (code === 'Prerrequisito' ? 'Asignatura que debe aprobarse antes de cursar esta materia.' : code);
 return `<button type="button" class="academic-help" data-tooltip="${escapeHtml(definition + '.')}" aria-label="${escapeHtml(label + ': mostrar explicación')}">${escapeHtml(label)}<span aria-hidden="true" class="help-mark">ⓘ</span></button>`;
}
const academicTooltip = document.createElement('div');
academicTooltip.id = 'academic-tooltip'; academicTooltip.className = 'academic-tooltip';
academicTooltip.setAttribute('role','tooltip'); academicTooltip.hidden = true;
document.body.append(academicTooltip);
let tooltipTrigger = null, tooltipDismissTimer;
function hideAcademicTooltip() {
 clearTimeout(tooltipDismissTimer);
 tooltipTrigger?.removeAttribute('aria-describedby');
 tooltipTrigger = null; academicTooltip.hidden = true;
}
function showAcademicTooltip(trigger) {
 hideAcademicTooltip(); tooltipTrigger = trigger;
 trigger.setAttribute('aria-describedby',academicTooltip.id);
 academicTooltip.textContent = trigger.dataset.tooltip; academicTooltip.hidden = false;
 const r = trigger.getBoundingClientRect(), t = academicTooltip.getBoundingClientRect();
 const left = Math.max(12, Math.min(r.left, window.innerWidth - t.width - 12));
 const below = r.bottom + 8;
 const top = below + t.height <= window.innerHeight - 12 ? below : Math.max(12,r.top - t.height - 8);
 academicTooltip.style.left = `${left}px`; academicTooltip.style.top = `${top}px`;
}
document.addEventListener('pointerover',e=>{const trigger=e.target.closest('[data-tooltip]');if(trigger && trigger!==tooltipTrigger)showAcademicTooltip(trigger);if(trigger || e.target.closest('#academic-tooltip'))clearTimeout(tooltipDismissTimer);});
document.addEventListener('pointerout',e=>{if(e.target.closest('[data-tooltip],#academic-tooltip'))tooltipDismissTimer=setTimeout(hideAcademicTooltip,150);});
document.addEventListener('focusin',e=>{const trigger=e.target.closest('[data-tooltip]');if(trigger)showAcademicTooltip(trigger);});
document.addEventListener('focusout',e=>{if(e.target.closest('[data-tooltip]'))hideAcademicTooltip();});
document.addEventListener('click',e=>{const trigger=e.target.closest('[data-tooltip]');if(trigger)showAcademicTooltip(trigger);else if(!e.target.closest('#academic-tooltip'))hideAcademicTooltip();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')hideAcademicTooltip();});
window.addEventListener('scroll',hideAcademicTooltip,true);
window.addEventListener('resize',hideAcademicTooltip);
function learningComponentDetails(subject) {
 const c = subject.components;
 const rows = [
  ['ACD', 'Aprendizaje en Contacto con el Docente', c.acd.idp, c.acd.idv, c.acd.idp + c.acd.idv],
  ['APE', 'Aprendizaje Práctico Experimental', c.ape.idp, c.ape.idv, c.ape.idp + c.ape.idv],
  ['AA', 'Aprendizaje Autónomo', null, null, c.aa]
 ];
 const tableRows = rows.map(([code,label,idp,idv,total]) => `<tr><th scope="row">${academicHelp(code)}</th><td>${idp === null ? '—' : formatNumber(idp)}</td><td>${idv === null ? '—' : formatNumber(idv)}</td><td>${formatNumber(total)}</td></tr>`).join('');
 return `<section class="learning-components" aria-label="Componentes de aprendizaje de la asignatura"><h4>Componentes de aprendizaje y prácticas</h4><p>Distribución de horas de <strong>${escapeHtml(subject.name)}</strong>.</p><div class="component-table-scroll"><table class="component-table"><caption>Horas de aprendizaje de la asignatura</caption><thead><tr><th scope="col">Componente</th><th scope="col">${academicHelp('IDP', 'IDP · Presencial')}</th><th scope="col">${academicHelp('IDV', 'IDV · Virtual')}</th><th scope="col">Horas</th></tr></thead><tbody>${tableRows}</tbody><tfoot><tr><th scope="row" colspan="3">${academicHelp('T.H', 'T.H · Total de horas de aprendizaje')}</th><td>${formatNumber(subject.hours)}</td></tr></tfoot></table></div><div class="practice-totals"><div><span>${academicHelp('PP', 'PP · Prácticas Pre-Profesionales')}</span><strong>${formatNumber(subject.pp)} h</strong></div><div><span>${academicHelp('VS', 'VS · Vinculación con la Sociedad')}</span><strong>${formatNumber(subject.vs)} h</strong></div><div class="combined-total"><span>Carga total, incluyendo PP y VS</span><strong>${formatNumber(subject.hours + subject.pp + subject.vs)} h</strong></div></div><p class="source-note">AA corresponde a trabajo autónomo; no se divide en IDP e IDV. T.H conserva el valor de la casilla del PDF; PP y VS se contabilizan por separado.</p>${subject.componentSource === 'itinerary-slot' ? '<p class="source-note">La distribución de horas corresponde a la casilla Itinerario del ciclo. El PDF identifica las opciones de itinerario por separado, sin repetir su desglose.</p>' : ''}</section>`;
}
function showSubject(id) {
 hideAcademicTooltip();
 const s = data.subjects.find(s => s.id === id); selectedId=id;renderCurriculum();
 const pre=s.prerequisites.map(id => {const p=data.subjects.find(s=>s.id===id);return `<button class="prereq-link" data-subject="${id}">${escapeHtml(p?.name || id)}</button>`;}).join('') || 'No indicado en el PDF';
 const anomaly=s.id==='E2C3A1'||s.id==='E2C4A4';
 $('#subject-detail').hidden=false;
 $('#subject-detail').innerHTML=`<button class="close-detail" aria-label="Cerrar detalle">×</button><div class="detail-art" aria-hidden="true">&lt;/&gt;</div><div class="detail-content"><p class="eyebrow">${academicHelp('C.I', 'C.I · ' + s.id)} · PROPUESTA CURRICULAR</p><h3 id="detail-title">${escapeHtml(s.name)}</h3><div class="badges"><span>Ciclo ${s.cycle}</span><span>${areaNames[s.area]}</span><span>${formatNumber(s.credits)} créditos</span></div><div class="detail-facts"><div><strong>${academicHelp('Prerrequisito')}</strong>${pre}</div><div><strong>Horas de aprendizaje</strong>${s.hours} horas</div><div><strong>${s.id==='E2C9A4'?'Vinculación':'Prácticas preprofesionales'}</strong>${s.practice} horas</div><div><strong>${academicHelp('C.U', 'C.U · Código UNESCO')}</strong>${s.unesco}</div></div>${learningComponentDetails(s)}${anomaly?'<p class="academic-warning">El PDF presenta una dependencia circular entre Estructura de Datos y Complejidad Computacional. Se conserva la referencia original; requiere validación académica.</p>':''}<div class="detail-tabs" role="tablist" aria-label="Información de la asignatura"><button role="tab" aria-selected="true" id="tab-source" aria-controls="detail-panel" data-detail-tab="source">Datos de la malla</button><button role="tab" aria-selected="false" id="tab-syllabus" aria-controls="detail-panel" data-detail-tab="syllabus">Plan de asignatura</button></div><p id="detail-panel" role="tabpanel" aria-labelledby="tab-source">La propuesta incluye esta asignatura en ${areaNames[s.area].toLowerCase()}. Las horas de prácticas o vinculación se muestran por separado de las horas de aprendizaje.</p></div>`;
}
$('#curriculum').addEventListener('click', e=>{const b=e.target.closest('[data-subject]');if(b)showSubject(b.dataset.subject);});
$('#subject-detail').addEventListener('click', e=>{const b=e.target.closest('[data-subject]');if(b)showSubject(b.dataset.subject);if(e.target.closest('.close-detail')){selectedId=null;$('#subject-detail').hidden=true;renderCurriculum();}const tab=e.target.closest('[data-detail-tab]');if(tab){document.querySelectorAll('[data-detail-tab]').forEach(b=>b.setAttribute('aria-selected',String(b===tab)));$('#detail-panel').setAttribute('aria-labelledby',tab.id);$('#detail-panel').textContent=tab.dataset.detailTab==='syllabus'?'Los resultados de aprendizaje, contenidos, metodología, evaluación y bibliografía no están incluidos en el PDF. Se incorporarán cuando se disponga del plan oficial de la asignatura.':'Datos transcritos de la propuesta de malla curricular. Las horas de prácticas o vinculación se muestran por separado de las horas de aprendizaje.';}});
$('#subject-search').addEventListener('input',renderCurriculum);$('#area-filter').addEventListener('change',renderCurriculum);
$('#track-select').addEventListener('change',()=>{selectedId=null;$('#subject-detail').hidden=true;renderCurriculum();});
document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-view]').forEach(t=>{t.classList.toggle('active',t===b);t.setAttribute('aria-pressed',String(t===b));});$('#area-label').hidden=b.dataset.view!=='area';if(b.dataset.view==='track')$('#track-select').focus();renderCurriculum();}));
document.querySelectorAll('[data-track]').forEach(b=>b.addEventListener('click',()=>{$('#track-select').value=b.dataset.track;$('#track-select').dispatchEvent(new Event('change'));$('#formacion').scrollIntoView({behavior:'smooth'});}));
$('#experience-links').addEventListener('click',e=>{const b=e.target.closest('[data-info]');if(!b)return;const [,title,body]=data.experience[Number(b.dataset.info)];$('#info-title').textContent=title;$('#info-body').textContent=body;$('#info-dialog').showModal();});
$('#close-dialog').addEventListener('click',()=>$('#info-dialog').close());
renderCurriculum();

function renderCareerOverview() {
 const colors = ['#195b91','#61a3d1','#00877b','#69beb2','#8a66b0','#d9a338','#c55d6d'];
 const components = data.componentSummary;
 const componentRows = components.map(([code,mode,credits,hours],i) => `<tr><th scope="row"><span class="summary-dot" style="--dot:${colors[i]}"></span>${academicHelp(code)}${mode === '—' ? '' : `<span class="interaction-badge">${academicHelp(mode)}</span>`}</th><td>${formatNumber(credits)}</td><td>${formatNumber(hours)}</td></tr>`).join('');
 const segments = components.map(([code,mode,,hours],i) => `<span style="flex:${hours};background:${colors[i]}" title="${code} ${mode}: ${formatNumber(hours)} horas"></span>`).join('');
 $('#career-overview').innerHTML = `<div class="overview-banner"><div><p class="eyebrow">LA FORMACIÓN EN CIFRAS</p><h3 id="overview-title">Una mirada a toda la carrera</h3><p>Organización y distribución de la propuesta curricular.</p></div><div class="overview-totals"><div><strong>135</strong><span>créditos</span></div><div><strong>6.480</strong><span>horas totales</span></div><div><strong>9</strong><span>ciclos</span></div></div></div><div class="overview-grid"><article class="overview-card"><div class="overview-card-heading"><span class="overview-icon">◷</span><div><p class="eyebrow">01 / DISTRIBUCIÓN</p><h4>Aprendizaje y prácticas</h4></div></div><div class="learning-bar" role="img" aria-label="Distribución de las 6480 horas entre componentes de aprendizaje, prácticas y vinculación">${segments}</div><table class="overview-table"><caption class="visually-hidden">Componentes de aprendizaje y prácticas de toda la carrera</caption><thead><tr><th scope="col">Componente</th><th scope="col">Créditos</th><th scope="col">Horas</th></tr></thead><tbody>${componentRows}</tbody><tfoot><tr><th scope="row">Total</th><td>135</td><td>6.480</td></tr></tfoot></table></article><article class="overview-card"><div class="overview-card-heading"><span class="overview-icon">▦</span><div><p class="eyebrow">02 / ORGANIZACIÓN</p><h4>Unidades curriculares</h4></div></div><p>Una formación que avanza de los fundamentos a la integración de conocimientos.</p><div class="unit-list">${data.curricularUnits.map(u=>`<div class="unit-summary" style="--unit-color:${u.color}"><div class="unit-heading"><strong>${escapeHtml(u.name)}</strong><span>${formatNumber(u.credits)} <small>créditos</small></span></div><div class="unit-bar"><span style="width:${u.hours/6480*100}%"></span></div><div class="unit-meta"><span>${formatNumber(u.hours)} horas</span><span>${formatNumber(Math.round(u.hours/6480*1000)/10)} % de la formación</span></div></div>`).join('')}</div><div class="overview-card-total"><span>Total de la carrera</span><strong>135 cr. · 6.480 h</strong></div></article><article class="overview-card"><div class="overview-card-heading"><span class="overview-icon">⌘</span><div><p class="eyebrow">03 / FORMACIÓN EN LÍNEA</p><h4>Aprendizaje conectado</h4></div><span class="online-badge">560 h</span></div><p>Asignaturas en línea identificadas en la propuesta de ajuste curricular.</p><div class="online-list">${data.onlineSubjects.map(s=>`<div><span class="cycle-tag">C${s.cycle}</span><strong>${escapeHtml(s.name)}</strong><span class="online-values">${formatNumber(s.credits)} cr.<small>${s.hours} h</small></span></div>`).join('')}</div><div class="overview-card-total"><span>Total de formación en línea</span><strong>11,7 cr. · 560 h</strong></div></article><article class="overview-card project-card"><div class="overview-card-heading"><span class="overview-icon">✧</span><div><p class="eyebrow">04 / CONOCIMIENTO EN ACCIÓN</p><h4>Proyectos de integración de saberes</h4></div></div><p>Un recorrido que conecta la planificación, el desarrollo y la evaluación de soluciones.</p><ol class="project-timeline">${data.integrationProjects.map(p=>`<li><span class="project-cycle">${p.cycle}</span><div><small>CICLO ${p.cycle}</small><strong>${escapeHtml(p.name)}</strong></div></li>`).join('')}</ol></article></div><p class="overview-footnote">Fuente: propuesta de malla curricular. Estos datos corresponden a toda la carrera y se mantienen al explorar asignaturas. Los créditos conservan el redondeo del PDF.</p>`;
}
renderCareerOverview();
