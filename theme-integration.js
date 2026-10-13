'use strict';
// Static adaptation of the original UNL header: the Drupal bundle needs a live CMS.
const mobileToggle = document.querySelector('#menu-toggle');
const mobilePanel = document.querySelector('#navigation');
function closeInstitutionalMenu() {
 mobileToggle.setAttribute('aria-expanded','false');
 mobileToggle.setAttribute('aria-label','Abrir menú');
 mobileToggle.classList.remove('is-active');
 mobilePanel.classList.remove('is-open');
 mobilePanel.inert=true;
}
mobileToggle.addEventListener('click',()=>{
 const open=mobileToggle.getAttribute('aria-expanded')!=='true';
 mobileToggle.setAttribute('aria-expanded',String(open));
 mobileToggle.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');
 mobileToggle.classList.toggle('is-active',open);
 mobilePanel.classList.toggle('is-open',open);
 mobilePanel.inert=!open;
});
mobilePanel.querySelectorAll('li.has-children').forEach((item,index)=>{
 const submenu=item.querySelector(':scope > .submenu');
 const link=item.querySelector(':scope > a');
 if(!submenu)return;
 submenu.id=`institutional-submenu-${index}`;
 const toggle=document.createElement('button');
 toggle.type='button';toggle.className='submenu-toggle';
 toggle.setAttribute('aria-label',`Mostrar opciones de ${link.textContent.trim()}`);
 toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-controls',submenu.id);
 toggle.innerHTML='<span class="submenu-toggle__icon" aria-hidden="true"></span>';
 submenu.inert=true;
 toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));item.classList.toggle('is-submenu-open',open);submenu.inert=!open;});
 item.append(toggle);
});
mobilePanel.addEventListener('click',e=>{if(e.target.closest('a'))closeInstitutionalMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&mobileToggle.getAttribute('aria-expanded')==='true'){closeInstitutionalMenu();mobileToggle.focus();}});
window.matchMedia('(min-width: 769px)').addEventListener('change',closeInstitutionalMenu);
