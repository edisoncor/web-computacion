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
// Collect every prerequisite branch. A visited set also handles cycles in the source PDF.
function prerequisiteRoute(subjectId, subjects = data.subjects) {
 const byId = new Map(subjects.map(subject => [subject.id, subject]));
 const visited = new Set();
 const ancestors = new Set();
 const edges = new Set();
 function visit(id) {
  if (visited.has(id)) return;
  visited.add(id);
  for (const prerequisite of byId.get(id)?.prerequisites || []) {
   if (!byId.has(prerequisite)) continue;
   edges.add(`${prerequisite}->${id}`);
   if (prerequisite !== subjectId) ancestors.add(prerequisite);
   visit(prerequisite);
  }
 }
 if (subjectId) visit(subjectId);
 return {ancestors, edges};
}
function renderCurriculum() {
 const query = $('#subject-search').value.trim().normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 const area = $('#area-label').hidden ? 'all' : $('#area-filter').value;
 const subjects = visibleSubjects();
 const matching = s => (area === 'all' || s.area === area) && `${s.name} ${s.id}`.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().includes(query);
 const route = prerequisiteRoute(selectedId);
 $('#curriculum').innerHTML = Array.from({length:data.cycles},(_,i) => {
  const rows = subjects.filter(s => s.cycle === i+1 && matching(s));
  return `<div class="cycle"><h3>${i+1}.° Ciclo <small>${data.creditsPerCycle} créditos · ${data.hoursPerCycle} h</small></h3><div class="cycle-subjects">${rows.map(s => `<button class="subject ${s.area} ${s.route !== 'all' ? 'itinerario' : ''} ${s.id===selectedId?'selected':''} ${route.ancestors.has(s.id)?'prerequisite':''} ${s.prerequisites.includes(selectedId)?'dependent':''}" data-subject="${s.id}" aria-pressed="${s.id===selectedId}"><span>${escapeHtml(s.name)}</span><small>${formatNumber(s.credits)} cr.</small></button>`).join('') || '<p class="no-results">Sin coincidencias</p>'}</div></div>`;
 }).join('');
 scheduleConnections();
 $('#result-count').textContent = `${subjects.filter(matching).length} asignaturas visibles. Selecciona una asignatura para consultar sus datos. `;
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
 const route = prerequisiteRoute(selectedId);
 let hidden=0;
 const relations=visibleSubjects().flatMap(s=>s.prerequisites.map(id=>({from:id,to:s.id,type:'prerequisite'})).concat((s.corequisites || []).map(id=>({from:id,to:s.id,type:'corequisite'}))));
 for (const [index,edge] of relations.entries()) {
  const from=nodes.get(edge.from), to=nodes.get(edge.to);
  const incoming=edge.type==='prerequisite' && route.edges.has(`${edge.from}->${edge.to}`);
  const outgoing=!incoming && edge.from===selectedId;
  if (!from || !to) { if(incoming || outgoing)hidden++; continue; }
  const a=from.getBoundingClientRect(), b=to.getBoundingClientRect();
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
 $('#connection-status').textContent=selectedId ? `Ruta completa resaltada en azul: ${route.ancestors.size} prerrequisito(s) directo(s) e indirecto(s). Verde: asignaturas que requieren esta materia.${hidden ? ` ${hidden} relación(es) no visibles por los filtros actuales.` : ''}` : `${paths.length} conexiones visibles entre las asignaturas. Selecciona una asignatura para explorar su ruta.`;
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
 return `<section class="learning-components" aria-label="Componentes de aprendizaje de la asignatura"><h4>Componentes de aprendizaje y prácticas</h4><p>Distribución de horas de <strong>${escapeHtml(subject.name)}</strong>.</p><div class="component-table-scroll"><table class="component-table"><caption>Horas de aprendizaje de la asignatura</caption><thead><tr><th scope="col">Componente</th><th scope="col">${academicHelp('IDP', 'IDP · Presencial')}</th><th scope="col">${academicHelp('IDV', 'IDV · Virtual')}</th><th scope="col">Horas</th></tr></thead><tbody>${tableRows}</tbody><tfoot><tr><th scope="row" colspan="3">${academicHelp('T.H', 'T.H · Total de horas de aprendizaje')}</th><td>${formatNumber(subject.hours)}</td></tr></tfoot></table></div><div class="practice-totals"><div><span>${academicHelp('PP', 'PP · Prácticas Pre-Profesionales')}</span><strong>${formatNumber(subject.pp)} h</strong></div><div><span>${academicHelp('VS', 'VS · Vinculación con la Sociedad')}</span><strong>${formatNumber(subject.vs)} h</strong></div><div class="combined-total"><span>Carga total, incluyendo PP y VS</span><strong>${formatNumber(subject.hours + subject.pp + subject.vs)} h</strong></div></div></section>`;
}
function showSubject(id) {
 hideAcademicTooltip();
 const s = data.subjects.find(s => s.id === id); selectedId=id;renderCurriculum();
 const pre=s.prerequisites.map(id => {const p=data.subjects.find(s=>s.id===id);return `<button class="prereq-link" data-subject="${id}">${escapeHtml(p?.name || id)}</button>`;}).join('') || '—';
 $('#subject-detail').hidden=false;
 $('#subject-detail').innerHTML=`<button class="close-detail" aria-label="Cerrar detalle">×</button><div class="detail-art" aria-hidden="true">&lt;/&gt;</div><div class="detail-content"><p class="eyebrow">${academicHelp('C.I', 'C.I · ' + s.id)}</p><h3 id="detail-title">${escapeHtml(s.name)}</h3><div class="badges"><span>Ciclo ${s.cycle}</span><span>${areaNames[s.area]}</span><span>${formatNumber(s.credits)} créditos</span></div><div class="detail-facts"><div><strong>${academicHelp('Prerrequisito')}</strong>${pre}</div><div><strong>Horas de aprendizaje</strong>${s.hours} horas</div><div><strong>${s.id==='E2C9A4'?'Vinculación':'Prácticas preprofesionales'}</strong>${s.practice} horas</div><div><strong>${academicHelp('C.U', 'C.U · Código UNESCO')}</strong>${s.unesco}</div></div>${learningComponentDetails(s)}</div>`;
}
$('#curriculum').addEventListener('click', e=>{const b=e.target.closest('[data-subject]');if(b)showSubject(b.dataset.subject);});
$('#subject-detail').addEventListener('click', e=>{
 const button=e.target.closest('[data-subject]');if(button)showSubject(button.dataset.subject);
 if(e.target.closest('.close-detail')){selectedId=null;$('#subject-detail').hidden=true;renderCurriculum();}
});
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
 $('#career-overview').innerHTML = `<div class="overview-banner"><div><p class="eyebrow">LA FORMACIÓN EN CIFRAS</p><h3 id="overview-title">Una mirada a toda la carrera</h3><p>Organización y distribución de tu formación.</p></div><div class="overview-totals"><div><strong>135</strong><span>créditos</span></div><div><strong>6.480</strong><span>horas totales</span></div><div><strong>9</strong><span>ciclos</span></div></div></div><div class="overview-grid"><article class="overview-card"><div class="overview-card-heading"><span class="overview-icon">◷</span><div><p class="eyebrow">01 / DISTRIBUCIÓN</p><h4>Aprendizaje y prácticas</h4></div></div><div class="learning-bar" role="img" aria-label="Distribución de las 6480 horas entre componentes de aprendizaje, prácticas y vinculación">${segments}</div><table class="overview-table"><caption class="visually-hidden">Componentes de aprendizaje y prácticas de toda la carrera</caption><thead><tr><th scope="col">Componente</th><th scope="col">Créditos</th><th scope="col">Horas</th></tr></thead><tbody>${componentRows}</tbody><tfoot><tr><th scope="row">Total</th><td>135</td><td>6.480</td></tr></tfoot></table></article><article class="overview-card"><div class="overview-card-heading"><span class="overview-icon">▦</span><div><p class="eyebrow">02 / ORGANIZACIÓN</p><h4>Unidades curriculares</h4></div></div><p>Una formación que avanza de los fundamentos a la integración de conocimientos.</p><div class="unit-list">${data.curricularUnits.map(u=>`<div class="unit-summary" style="--unit-color:${u.color}"><div class="unit-heading"><strong>${escapeHtml(u.name)}</strong><span>${formatNumber(u.credits)} <small>créditos</small></span></div><div class="unit-bar"><span style="width:${u.hours/6480*100}%"></span></div><div class="unit-meta"><span>${formatNumber(u.hours)} horas</span><span>${formatNumber(Math.round(u.hours/6480*1000)/10)} % de la formación</span></div></div>`).join('')}</div><div class="overview-card-total"><span>Total de la carrera</span><strong>135 cr. · 6.480 h</strong></div></article><article class="overview-card"><div class="overview-card-heading"><span class="overview-icon">⌘</span><div><p class="eyebrow">03 / FORMACIÓN EN LÍNEA</p><h4>Aprendizaje conectado</h4></div><span class="online-badge">560 h</span></div><p>Asignaturas que se desarrollan en modalidad virtual.</p><div class="online-list">${data.onlineSubjects.map(s=>`<div><span class="cycle-tag">C${s.cycle}</span><strong>${escapeHtml(s.name)}</strong><span class="online-values">${formatNumber(s.credits)} cr.<small>${s.hours} h</small></span></div>`).join('')}</div><div class="overview-card-total"><span>Total de formación en línea</span><strong>11,7 cr. · 560 h</strong></div></article><article class="overview-card project-card"><div class="overview-card-heading"><span class="overview-icon">✧</span><div><p class="eyebrow">04 / CONOCIMIENTO EN ACCIÓN</p><h4>Proyectos de integración de saberes</h4></div></div><p>Un recorrido que conecta la planificación, el desarrollo y la evaluación de soluciones.</p><ol class="project-timeline">${data.integrationProjects.map(p=>`<li><span class="project-cycle">${p.cycle}</span><div><small>CICLO ${p.cycle}</small><strong>${escapeHtml(p.name)}</strong></div></li>`).join('')}</ol></article></div>`;
}
renderCareerOverview();

const projectCategories = {
 research: {projects:data.researchProjects || [], label:'investigación'},
 community: {projects:data.communityProjects || [], label:'vinculación con la sociedad'}
};
function renderCareerProjects(category, filter = 'all') {
 const {projects,label} = projectCategories[category];
 const visible = projects.filter(p => filter === 'all' || p.relationship === filter);
 const projectCount = projects.filter(p=>p.kind !== 'research').length;
 const researchCount = projects.filter(p=>p.kind === 'research').length;
 $(`#${category}-count`).textContent = `${projectCount} proyecto${projectCount === 1 ? '' : 's'}${researchCount ? ` · ${researchCount} investigación documentada` : ''}`;
 $(`#${category}-projects`).innerHTML = visible.length ? visible.map(p => {
  const url = typeof p.url === 'string' && /^(https?:\/\/|#[a-z][a-z0-9-]*$)/i.test(p.url) ? escapeHtml(p.url) : null;
  return `<article id="${escapeHtml(p.id)}" class="career-project-card"><div class="career-project-meta"><span class="relationship-tag ${p.relationship === 'participation' ? 'collaboration' : ''}">${p.relationship === 'participation' ? 'Participación de la carrera' : 'Vinculado a Computación'}</span>${p.status ? `<span class="project-state">${escapeHtml(p.status)}</span>` : ''}</div><h3>${escapeHtml(p.name)}</h3>${p.description ? `<p>${escapeHtml(p.description)}</p>` : ''}<dl class="career-project-info">${p.period ? `<div><dt>Periodo</dt><dd>${escapeHtml(p.period)}</dd></div>` : ''}${p.coordinator ? `<div><dt>Responsable</dt><dd>${escapeHtml(p.coordinator)}</dd></div>` : ''}${p.institution ? `<div><dt>Institución / equipo</dt><dd>${escapeHtml(p.institution)}</dd></div>` : ''}${p.role ? `<div><dt>Aporte de Computación</dt><dd>${escapeHtml(p.role)}</dd></div>` : ''}${p.beneficiaries ? `<div><dt>Beneficiarios</dt><dd>${escapeHtml(p.beneficiaries)}</dd></div>` : ''}</dl>${url ? `<a class="text-link" href="${url}" ${p.url.startsWith('#') ? 'data-project-anchor="true"' : 'target="_blank" rel="noopener noreferrer"'}>${escapeHtml(p.linkLabel || 'Ver proyecto')} ↗</a>` : ''}</article>`;
 }).join('') : `<div class="projects-empty"><span aria-hidden="true">${category === 'research' ? '⌘' : '♡'}</span><div><h3>${projects.length ? 'No hay proyectos en esta categoría' : 'Listado de proyectos pendiente'}</h3><p>${projects.length ? 'Selecciona otra categoría para consultar los proyectos disponibles.' : `Se incorporarán aquí los proyectos oficiales de ${label}, indicando si son propios de la carrera o si Computación participa en ellos.`}</p></div></div>`;
}
document.querySelectorAll('[data-project-filter]').forEach(button => button.addEventListener('click',()=>{
 const category = button.dataset.projectFilter;
 document.querySelectorAll(`[data-project-filter="${category}"]`).forEach(b=>b.setAttribute('aria-pressed',String(b === button)));
 renderCareerProjects(category,button.dataset.value);
}));
renderCareerProjects('research');
renderCareerProjects('community');

const team = data.team || [];
const initials = name => name.split(/\s+/).slice(0,2).map(word=>word[0]).join('');
function teamCard(person, featured = false) {
 const photo = typeof person.photo === 'string' && person.photo.trim() ? person.photo.trim() : null;
 const portrait = `<span class="team-avatar ${person.category}" aria-hidden="true"><span class="portrait-initials">${escapeHtml(initials(person.name))}</span>${photo ? `<img class="team-photo" src="${escapeHtml(photo)}" alt="" loading="lazy" style="object-position:${escapeHtml(person.photoPosition || 'center')}">` : ''}</span>`;
 return `<article class="team-person ${featured ? 'team-featured' : ''} ${person.role.startsWith('Director') ? 'team-director' : ''} team-category-${person.category}"><button type="button" class="team-profile-open" data-team-profile="${escapeHtml(person.id)}" aria-haspopup="dialog" aria-controls="team-profile-dialog"><span class="visually-hidden">Ver perfil de ${escapeHtml(person.name)}</span></button><div class="team-card-band" aria-hidden="true"></div><div class="team-profile-main">${portrait}<div class="team-person-body"><span class="team-role">${escapeHtml(person.role)}</span><h3>${escapeHtml(person.name)}</h3><span class="team-affiliation">Carrera de Computación · UNL</span></div></div>${person.email ? `<div class="team-profile-contact"><span class="team-contact-icon" aria-hidden="true">✉</span><div><span class="team-contact-label">Correo institucional</span>${person.email ? `<a class="team-email" href="mailto:${escapeHtml(person.email)}">${escapeHtml(person.email)}</a>` : ''}</div>${person.email ? `<a class="team-contact-action" href="mailto:${escapeHtml(person.email)}" aria-label="Escribir a ${escapeHtml(person.name)}">↗</a>` : ''}</div>` : ''}<span class="team-view-profile" aria-hidden="true">Ver perfil <span>→</span></span></article>`;
}
// If a portrait path is unavailable, keep the designed initials fallback visible.
document.addEventListener('error',event=>{if(event.target instanceof HTMLImageElement && event.target.classList.contains('team-photo'))event.target.remove();},true);
$('#team-leadership').innerHTML = team.filter(p=>p.featured).map(p=>teamCard(p,true)).join('');
let teamFilter = 'all';
function renderTeamDirectory() {
 const normalize = text=>text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 const query=normalize($('#team-search').value.trim());
 const members=team.filter(p=>(teamFilter==='all'||p.category===teamFilter)&&normalize(`${p.name} ${p.email||''} ${p.role}`).includes(query));
 $('#team-directory-list').innerHTML=members.length ? members.map(p=>teamCard(p)).join('') : '<p class="team-no-results">No hay coincidencias. Prueba con otro nombre o categoría.</p>';
 $('#team-results').textContent=`${members.length} de ${team.length} integrantes`;
}
$('#team-search').addEventListener('input',renderTeamDirectory);
document.querySelectorAll('[data-team-filter]').forEach(button=>button.addEventListener('click',()=>{
 teamFilter=button.dataset.teamFilter;
 document.querySelectorAll('[data-team-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 renderTeamDirectory();
}));
renderTeamDirectory();

$('#perfil-profesional').innerHTML=`<p class="eyebrow">TU PERFIL AL GRADUARTE</p><h2 id="professional-title">Formación para transformar el entorno</h2><p>Una formación que combina competencias técnicas, pensamiento crítico y compromiso social.</p><div class="grid three professional-areas">${data.professionalAreas.map(([title,body],i)=>`<article><span class="area-number">0${i+1}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(body)}</p></article>`).join('')}</div><div class="professional-bottom"><div><h3>Competencias que te acompañan</h3><div class="skill-chips">${data.transversalSkills.map(skill=>`<span>${escapeHtml(skill)}</span>`).join('')}</div></div><div><h3>Ámbitos de desempeño profesional</h3><ul class="career-roles">${data.careerRoles.map(role=>`<li>${escapeHtml(role)}</li>`).join('')}</ul></div></div>`;
$('#titulacion').innerHTML=`<div class="section-heading"><div><p class="eyebrow">EL CIERRE DE TU FORMACIÓN</p><h2 id="graduation-title">Opciones de titulación</h2><p>Dos alternativas para demostrar tus competencias profesionales.</p></div></div><div class="grid two graduation-options"><article><span class="graduation-icon">▤</span><h3>Trabajo de Integración Curricular</h3><p>Investigación exploratoria, descriptiva o de desarrollo aplicado en software, sistemas o aplicaciones.</p><ol><li><strong>Ciclo 8 · Formulación</strong><span>Elaboración y aprobación del proyecto en Integración Curricular 1 (160 horas).</span></li><li><strong>Ciclo 9 · Ejecución</strong><span>Desarrollo del trabajo y entrega del informe final en Integración Curricular 2 (200 horas).</span></li><li><strong>Disertación pública</strong><span>Exposición y defensa ante un tribunal, una vez aprobado el informe final.</span></li></ol></article><article><span class="graduation-icon">⌘</span><h3>Examen Complexivo</h3><p>Evaluación teórico-práctica mediante casos o problemáticas propias del campo de la computación.</p><ol><li><strong>Ciclo 8 · Plan de preparación</strong><span>Elaboración y aprobación del proyecto de preparación en Integración Curricular 1 (160 horas).</span></li><li><strong>Ciclo 9 · Desarrollo</strong><span>Preparación, resolución de casos e informe final en Integración Curricular 2 (200 horas).</span></li><li><strong>Evaluación teórico-práctica</strong><span>Prueba integral planificada por la Dirección de Carrera, conforme a la guía correspondiente.</span></li></ol></article></div><div class="graduation-total"><strong>360 horas</strong><span>160 h en el ciclo 8 + 200 h en el ciclo 9 para las fases 1 y 2 de cada alternativa.</span></div>`;
$('#practicas').innerHTML=`<p class="eyebrow">APLICA LO QUE APRENDES</p><h2 id="practice-title">Tu ruta de prácticas</h2><p>Una experiencia progresiva en organizaciones reales y comunidades.</p><div class="practice-route-totals"><div><strong>240 h</strong><span>Proyecto Empresarial · Prácticas laborales</span></div><div><strong>120 h</strong><span>Proyecto Social · Servicio comunitario</span></div><div><strong>360 h</strong><span>Total de prácticas preprofesionales</span></div></div><ol class="practice-route">${data.practiceRoute.map(p=>`<li class="${p.type==='Servicio comunitario'?'social-step':''}"><div class="practice-route-marker"><span>C${p.cycle}</span></div><div class="practice-route-body"><span class="practice-route-type">${escapeHtml(p.type)} · ${p.hours} horas</span><h3>${escapeHtml(p.name)}</h3><p>${escapeHtml(p.purpose)}</p><button class="text-link" data-route-subject="${p.subjectId}">Ver asignatura en la malla →</button></div></li>`).join('')}</ol>`;
$('#research-lines').innerHTML=`<div class="research-line-banner"><span class="eyebrow">LÍNEA DE INVESTIGACIÓN</span><h3>${escapeHtml(data.researchLine)}</h3><p>Articulada con la línea institucional «Industria, Innovación y Desarrollo Tecnológico».</p></div><div class="grid three research-subline-grid">${data.researchSublines.map(group=>`<details class="research-subline"><summary>${escapeHtml(group.name)}<span>${group.lines.length} sublíneas</span></summary><ul>${group.lines.map(line=>`<li>${escapeHtml(line)}</li>`).join('')}</ul></details>`).join('')}</div>`;
document.addEventListener('click',event=>{
 const button=event.target.closest('[data-route-subject]');if(!button)return;
 $('#subject-search').value='';$('#area-filter').value='all';
 showSubject(button.dataset.routeSubject);
 $('#formacion').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
});

$('#community-results').innerHTML = data.communityResults.map(result=>`<article id="resultado-ereader" class="community-result"><div class="result-illustration" aria-hidden="true"><span>⌘</span><strong>E-Reader</strong><small>TECNOLOGÍA PARA LA INCLUSIÓN</small></div><div class="community-result-body"><p class="eyebrow">RESULTADO DESTACADO · PROYECTO DE INCLUSIÓN LECTORA</p><h3>${escapeHtml(result.name)}</h3><h4>${escapeHtml(result.subtitle)}</h4><p>${escapeHtml(result.description)}</p><div class="result-award"><span aria-hidden="true">✧</span><strong>${escapeHtml(result.recognition)}</strong></div><a class="text-link" href="${escapeHtml(result.url)}" target="_blank" rel="noopener noreferrer">Leer noticia oficial de la UNL ↗</a></div></article>`).join('');
$('#publication-list').innerHTML=data.publications.map(publication=>`<article class="publication-card"><div class="publication-header"><span class="publication-icon" aria-hidden="true">▤</span><span>${publication.year} · ARTÍCULO CIENTÍFICO</span></div><h3>${escapeHtml(publication.title)}</h3><p class="publication-authors">${escapeHtml(publication.authors)}</p><div class="publication-journal">${escapeHtml(publication.journal)}</div><p class="publication-doi">DOI: ${escapeHtml(publication.doi)}</p><a class="text-link" href="${escapeHtml(publication.url)}" target="_blank" rel="noopener noreferrer">Leer publicación en CEDAMAZ ↗</a></article>`).join('');

const researchGroups = data.researchGroups || [];
let currentGroupId = null;
$('#research-group-cards').innerHTML=researchGroups.map(group=>`<button type="button" class="research-group-card ${group.id}" data-research-group="${group.id}" aria-expanded="false" aria-controls="research-group-detail"><span class="group-card-symbol" aria-hidden="true">${group.id==='gitic'?'&lt;/&gt;':'✧'}</span><span class="group-card-name">${escapeHtml(group.name)}</span><span class="group-card-fullname">${escapeHtml(group.fullName)}</span><span class="group-card-tagline">${escapeHtml(group.tagline)}</span><span class="group-card-tags">${group.tags.map(tag=>`<span>${escapeHtml(tag)}</span>`).join('')}</span><span class="group-card-action">Conoce ${escapeHtml(group.name)} <span aria-hidden="true">→</span></span></button>`).join('');
function renderGroupMetrics(group) {
 const metrics=[['Proyectos activos',group?.activeProjects],['Investigadores registrados',group?.registeredMembers],['Publicaciones',group?.publicationCount],['Prototipos / productos',group?.products?.length || null],['Redes de colaboración',group?.networkCount]].filter(([,value])=>value!=null);
 $('#group-metrics').hidden=metrics.length===0;
 $('#group-metrics').innerHTML=metrics.length ? `<p class="group-metrics-heading">${escapeHtml(group.name)} en cifras</p><div style="--metric-columns:${metrics.length}">${metrics.map(([label,value])=>`<div><strong>${value}</strong><span>${label}</span></div>`).join('')}</div>` : '';
}
function groupPanel(group, view) {
 if(view==='description')return `<p class="group-detail-description">${escapeHtml(group.description)}</p>${group.registrationCode?`<dl class="group-registration"><div><dt>Registro oficial</dt><dd>${escapeHtml(group.registeredOn)}</dd></div><div><dt>Código</dt><dd>${escapeHtml(group.registrationCode)}</dd></div><div><dt>Coordinación</dt><dd>${escapeHtml(group.coordinator)}</dd></div><div><dt>Participación de Computación</dt><dd>${group.computingMembers} de ${group.registeredMembers} integrantes registrados</dd></div></dl>`:''}<div class="group-line-list">${group.lines.map(line=>`<div><h4>${escapeHtml(line.name)}</h4>${line.description?`<p>${escapeHtml(line.description)}</p>`:''}</div>`).join('')}</div>`;
 if(view==='members')return `${group.registeredMembers?`<p>${group.registeredMembers} integrantes registrados, de los cuales ${group.computingMembers} pertenecen a la Carrera de Computación.</p>`:''}${group.members.length?group.members.map(member=>`<div class="group-member"><span class="group-member-initials" aria-hidden="true">${escapeHtml(initials(member.name))}</span><div><h4>${escapeHtml(member.name)}</h4><p>${escapeHtml(member.role)}</p>${member.email?`<a class="text-link" href="mailto:${escapeHtml(member.email)}">${escapeHtml(member.email)}</a>`:''}</div></div>`).join(''):''}`;
 if(view==='projects')return group.antecedents.length?`<p>Proyectos que forman parte de los antecedentes de investigación del grupo.</p><div class="group-associated-list">${group.antecedents.map(project=>`<a href="#${project.target}" data-group-project-category="${project.category}"><span>Antecedente</span><strong>${escapeHtml(project.name)}</strong><span aria-hidden="true">→</span></a>`).join('')}</div>${group.products.length?`<h4 class="group-results-title">Resultados tecnológicos referenciados</h4><div class="group-associated-list">${group.products.map(product=>`<a href="#${product.target}"><span>Producto</span><strong>${escapeHtml(product.name)}</strong><span aria-hidden="true">→</span></a>`).join('')}</div>`:''}`:'';
 if(view==='publications')return `<p>Explora la producción científica de los integrantes de Computación.</p><a class="text-link" href="#produccion-cientifica">Explorar las publicaciones de la Carrera de Computación →</a>`;
 return group.networks.length?`<ul>${group.networks.map(network=>`<li>${escapeHtml(network)}</li>`).join('')}</ul>`:`<p>Articulado con el Centro de Investigación I2TEC y la Carrera de Computación.</p>`;
}
function showResearchGroup(id, view='description') {
 const group=researchGroups.find(group=>group.id===id);if(!group)return;
 currentGroupId=id;
 document.querySelectorAll('[data-research-group]').forEach(button=>{const active=button.dataset.researchGroup===id;button.setAttribute('aria-expanded',String(active));button.classList.toggle('active',active);});
 renderGroupMetrics(group);
 $('#research-group-detail').hidden=false;
 $('#research-group-detail').innerHTML=`<button class="close-group-detail" aria-label="Cerrar detalle del grupo">×</button><p class="eyebrow">GRUPO DE INVESTIGACIÓN</p><h3 id="group-detail-title">${escapeHtml(group.name)} <span>${escapeHtml(group.fullName)}</span></h3><div class="group-detail-nav" role="group" aria-label="Información del grupo">${[['description','Descripción y líneas'],['members','Integrantes'],['projects','Proyectos y resultados'],['publications','Producción científica'],['networks','Articulación']].filter(([key])=>key==='description'||key==='publications'||(key==='members'&&group.members.length)||(key==='projects'&&group.antecedents.length)||(key==='networks'&&group.id==='iaforgood')).map(([key,label])=>`<button data-group-view="${key}" aria-pressed="${key===view}">${label}</button>`).join('')}</div><div class="group-panel">${groupPanel(group,view)}</div>`;
}
$('#research-group-cards').addEventListener('click',event=>{const button=event.target.closest('[data-research-group]');if(button){showResearchGroup(button.dataset.researchGroup);$('#research-group-detail').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'nearest'});}});
$('#research-group-detail').addEventListener('click',event=>{
 const view=event.target.closest('[data-group-view]');if(view){const key=view.dataset.groupView;showResearchGroup(currentGroupId,key);$(`[data-group-view="${key}"]`).focus();}
 if(event.target.closest('.close-group-detail')){const id=currentGroupId;currentGroupId=null;$('#research-group-detail').hidden=true;renderGroupMetrics(null);document.querySelectorAll('[data-research-group]').forEach(button=>{button.setAttribute('aria-expanded','false');button.classList.remove('active');});$(`[data-research-group="${id}"]`).focus();}
 const project=event.target.closest('[data-group-project-category]');if(project){const category=project.dataset.groupProjectCategory;renderCareerProjects(category,'all');document.querySelectorAll(`[data-project-filter="${category}"]`).forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.value==='all')));}
});
renderGroupMetrics(null);

const teamProfileDialog = $('#team-profile-dialog');
let teamProfileTrigger = null;
let previousBodyOverflow = '';
const normalizeTeamName = name => name.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
function openTeamProfile(id, trigger) {
 const person=team.find(person=>person.id===id);if(!person)return;
 hideAcademicTooltip();
 teamProfileTrigger=trigger;
 const name=normalizeTeamName(person.name);
 const projects=[...data.researchProjects,...data.communityProjects].filter(project=>project.coordinator && normalizeTeamName(project.coordinator)===name);
 const groups=researchGroups.filter(group=>group.coordinator && normalizeTeamName(group.coordinator)===name);
 const publications=data.publications.filter(publication=>(person.publicationIds || []).includes(publication.doi));
 const photo=typeof person.photo==='string' && person.photo.trim() ? person.photo.trim() : null;
 const profileLinks=(person.profileLinks || []).filter(link=>/^https?:\/\//i.test(link.url));
 const links=profileLinks.map(link=>`<a href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)} ↗</a>`).join('');
 $('#team-modal-content').innerHTML=`<button type="button" class="team-modal-close" aria-label="Cerrar perfil" autofocus>×</button><div class="team-modal-cover ${person.category}"><span>UNIVERSIDAD NACIONAL DE LOJA</span></div><div class="team-modal-heading"><span class="team-modal-avatar team-avatar ${person.category}" aria-hidden="true"><span class="portrait-initials">${escapeHtml(initials(person.name))}</span>${photo?`<img class="team-photo" src="${escapeHtml(photo)}" alt="" style="object-position:${escapeHtml(person.photoPosition || 'center')}">`:''}</span><div><span class="team-role">${escapeHtml(person.role)}</span><h2 id="team-modal-name">${escapeHtml(person.name)}</h2><p>Carrera de Computación</p></div></div><div class="team-modal-body"><dl class="team-modal-facts"><div><dt>Institución</dt><dd>Universidad Nacional de Loja</dd></div><div><dt>Unidad académica</dt><dd>Facultad de la Energía, las Industrias y los Recursos Naturales No Renovables</dd></div><div><dt>Función</dt><dd>${escapeHtml(person.role)}</dd></div>${person.email?`<div><dt>Correo institucional</dt><dd><a href="mailto:${escapeHtml(person.email)}">${escapeHtml(person.email)}</a></dd></div>`:''}</dl>${person.biography?`<section><h3>Perfil profesional</h3><p>${escapeHtml(person.biography)}</p></section>`:''}${person.education?.length?`<section><h3>Formación académica</h3><ul>${person.education.map(item=>`<li>${escapeHtml(item)}</li>`).join('')}</ul></section>`:''}${person.areas?.length?`<section><h3>Áreas de trabajo</h3><div class="skill-chips">${person.areas.map(area=>`<span>${escapeHtml(area)}</span>`).join('')}</div></section>`:''}${groups.length?`<section><h3>Grupos de investigación</h3><div class="modal-profile-list">${groups.map(group=>`<button data-modal-group="${group.id}"><span>Coordinación</span><strong>${escapeHtml(group.name)}</strong><span aria-hidden="true">→</span></button>`).join('')}</div></section>`:''}${projects.length?`<section><h3>Proyectos e investigación</h3><div class="modal-profile-list">${projects.map(project=>`<button data-modal-project="${project.id}" data-modal-project-category="${data.communityProjects.includes(project)?'community':'research'}"><span>${escapeHtml(project.status)}</span><strong>${escapeHtml(project.name)}</strong><span aria-hidden="true">→</span></button>`).join('')}</div></section>`:''}${publications.length?`<section><h3>Producción científica</h3><div class="modal-profile-list">${publications.map(publication=>`<a href="${escapeHtml(publication.url)}" target="_blank" rel="noopener noreferrer"><span>${publication.year} · CEDAMAZ</span><strong>${escapeHtml(publication.title)}</strong><span aria-hidden="true">↗</span></a>`).join('')}</div></section>`:''}${links?`<section><h3>Perfiles académicos</h3><div class="team-modal-links">${links}</div></section>`:''}</div>${person.email?`<div class="team-modal-footer"><a class="boton button navy" href="mailto:${escapeHtml(person.email)}">✉ Contactar por correo</a></div>`:''}`;
 previousBodyOverflow=document.body.style.overflow;
 document.body.style.overflow='hidden';
 teamProfileDialog.showModal();
}
document.addEventListener('click',event=>{
 const trigger=event.target.closest('[data-team-profile]');if(trigger)openTeamProfile(trigger.dataset.teamProfile,trigger);
});
teamProfileDialog.addEventListener('click',event=>{
 if(event.target.closest('.team-modal-close'))teamProfileDialog.close();
 if(event.target===teamProfileDialog){const r=teamProfileDialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)teamProfileDialog.close();}
 const group=event.target.closest('[data-modal-group]');
 if(group){teamProfileDialog.close();showResearchGroup(group.dataset.modalGroup);$('#research-group-detail').scrollIntoView({behavior:'smooth',block:'start'});}
 const project=event.target.closest('[data-modal-project]');
 if(project){const category=project.dataset.modalProjectCategory;teamProfileDialog.close();renderCareerProjects(category,'all');document.querySelectorAll(`[data-project-filter="${category}"]`).forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.value==='all')));document.getElementById(project.dataset.modalProject).scrollIntoView({behavior:'smooth',block:'start'});}
});
teamProfileDialog.addEventListener('close',()=>{document.body.style.overflow=previousBodyOverflow;if(teamProfileTrigger?.isConnected)teamProfileTrigger.focus({preventScroll:true});teamProfileTrigger=null;});
