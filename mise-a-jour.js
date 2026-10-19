(function(){'use strict';
var panel=document.createElement('div');panel.id='tc-update-panel';
panel.style.cssText='position:fixed;right:12px;bottom:12px;z-index:10000;background:#152c40;color:white;padding:9px;border-radius:9px;box-shadow:0 3px 15px #0005;font:12px Arial;max-width:290px';
panel.innerHTML='<span id="tc-update-status">TOTOCALCIO PRO</span> <button type="button" id="tc-update-check">Vérifier</button> <button type="button" id="tc-update-reload">Actualiser</button>';
document.body.appendChild(panel);
var status=panel.querySelector('#tc-update-status'),checkButton=panel.querySelector('#tc-update-check'),reloadButton=panel.querySelector('#tc-update-reload');
var loaded=document.querySelector('meta[name="totocalcio-build"]')?.content||'';
function check(){
 checkButton.disabled=true;
 var latest=new URL('./totocalcio.html',location.href);latest.searchParams.set('controle-version',Date.now());
 fetch(latest.href,{cache:'no-store'}).then(function(response){if(!response.ok)throw Error();return response.text();}).then(function(text){
  var doc=new DOMParser().parseFromString(text,'text/html'),build=doc.querySelector('meta[name="totocalcio-build"]')?.content||'';
  status.textContent=build&&build!==loaded?'Nouvelle version disponible':'TOTOCALCIO PRO · version actuelle';
 }).catch(function(){status.textContent='Actualisation manuelle disponible';}).finally(function(){checkButton.disabled=false;});
}
checkButton.onclick=check;
reloadButton.onclick=function(){var latest=new URL(location.href);latest.searchParams.set('actualisation',Date.now());location.replace(latest.href);};
check();setInterval(function(){if(!document.hidden)check();},600000);
})();


/* Boutons compacts : noir / bleu clair, sports jaunes, selection orange */
(function(){
  'use strict';
  var style=document.createElement('style');
  style.id='tc-boutons-compacts-2026';
  style.textContent=`
  :root{--tc-btn-bg:#101b28;--tc-btn-border:#395b71;--tc-btn-ink:#8cddff;--tc-btn-hot:#f15a24;--tc-btn-hot2:#dc3828}
  button:not(.sport-logo-button):not(.sport-ball-button):not(.ticket-sport-button),
  input[type="button"],input[type="submit"],input[type="reset"],
  .nav button,.sport-picker button,.sport-logo-menu button,.match-sport-menu button{
    box-sizing:border-box!important;
    min-width:0!important;
    max-width:100%;
    min-height:29px!important;
    height:auto!important;
    padding:5px 9px!important;
    margin:2px 0!important;
    border:1px solid var(--tc-btn-border)!important;
    border-radius:6px!important;
    background:var(--tc-btn-bg)!important;
    color:var(--tc-btn-ink)!important;
    font-family:Inter,"Segoe UI",Arial,sans-serif!important;
    font-size:12px!important;
    font-weight:650!important;
    line-height:1.25!important;
    letter-spacing:0!important;
    text-shadow:none!important;
    box-shadow:0 1px 2px #0000001c!important;
    white-space:normal!important;
    overflow-wrap:anywhere;
    cursor:pointer;
    transition:background-color .12s,color .12s,border-color .12s!important;
  }
  button:not(.sport-logo-button):not(.sport-ball-button):not(.ticket-sport-button):hover,
  input[type="button"]:hover,input[type="submit"]:hover,input[type="reset"]:hover{
    background:#24485e!important;border-color:#75cfff!important;color:#dcf6ff!important;
  }
  button.active:not(.sport-logo-button):not(.sport-ball-button),
  button[aria-pressed="true"]:not(.sport-logo-button):not(.sport-ball-button),
  button[aria-selected="true"]:not(.sport-logo-button):not(.sport-ball-button),
  button[aria-current="page"]:not(.sport-logo-button):not(.sport-ball-button),
  .nav button.active,.sport-picker button.active,.sport-logo-menu button.active,.match-sport-menu button.active,
  button:not(.sport-logo-button):not(.sport-ball-button):active{
    background:linear-gradient(130deg,var(--tc-btn-hot),var(--tc-btn-hot2))!important;
    border-color:#b72f19!important;
    color:#fff!important;
    box-shadow:0 1px 3px #0003!important;
  }
  button:focus-visible{outline:2px solid #f56b35!important;outline-offset:2px!important}
  button:disabled{opacity:.45!important;cursor:not-allowed!important}
  .nav,.toolbar,.sport-picker,.ct-controls{gap:5px!important}
  .nav{padding:6px 0!important;margin-bottom:9px!important}
  .sport-picker{padding:8px 10px!important;margin-bottom:10px!important}
  .sport-picker button{flex:0 1 auto!important;background:#ffde4d!important;color:#121212!important;border-color:#d6a92b!important}\n  .sport-picker button:hover{background:#ffe990!important;color:#111!important}\n  .sport-picker button.active{background:#f15a24!important;color:#fff!important}
  .toolbar{align-items:center!important}\n  .nav button{min-height:29px!important;max-width:100%;font-size:12px!important;line-height:1.2!important}
  /* Garder les boutons de logo et ballon intacts : ce sont des selecteurs visuels speciaux. */
  @media(max-width:680px){
    .nav button,.sport-picker button{flex:0 1 auto!important}
    button:not(.sport-logo-button):not(.sport-ball-button):not(.ticket-sport-button){font-size:11.5px!important;padding:5px 7px!important}
  }
  @media print{#tc-update-panel{display:none!important}}
  `;
  document.head.appendChild(style);
})();


/* TotoCalcio PRO : saisie des pronostics en tableau ultra-compact */
(function(){
 var style=document.createElement('style');
 style.id='tc-pronos-ultra-compacts';
 style.textContent=`
 #bulletin-groups{gap:5px!important;margin:3px 0!important}
 #bulletin-groups .bc-line{border-radius:7px!important;box-shadow:none!important}
 #bulletin-groups .bc-line-head{padding:3px 7px!important;min-height:24px!important}
 #bulletin-groups .bc-line-head strong{font-size:11px!important}
 #bulletin-groups .bc-badge{height:20px!important;min-width:20px!important;border-radius:4px!important;font-size:11px!important;box-shadow:none!important}
 #bulletin-groups .bc-line-body{display:grid!important;grid-template-columns:minmax(0,1fr) minmax(0,1.35fr)!important;align-items:start!important;gap:6px!important;padding:5px!important}
 #bulletin-groups .bc-pronos-title{display:none!important}
 #bulletin-groups .bc-matches{gap:4px!important}
 #bulletin-groups .bc-match{grid-template-columns:22px minmax(0,1fr)!important;gap:4px!important;padding:4px!important;border-radius:5px!important}
 #bulletin-groups .bc-match-label{padding:1px 0!important;font-size:0!important;gap:0!important}
 #bulletin-groups .bc-match-label b{font-size:11px!important}
 #bulletin-groups .bc-match-label span{display:none!important}
 #bulletin-groups .bc-match-edit{gap:3px!important}
 #bulletin-groups .bc-match-top{gap:3px!important;flex-wrap:nowrap!important}
 #bulletin-groups .bc-match select,#bulletin-groups .bc-match input{min-height:24px!important;padding:2px 4px!important;font-size:10px!important;border-radius:4px!important}
 #bulletin-groups .bc-sport{min-width:0!important;max-width:95px!important;flex:0 1 80px!important}
 #bulletin-groups .bc-country,#bulletin-groups .bc-division{min-width:0!important;max-width:none!important;flex:1 1 0!important}
 #bulletin-groups .bc-teams{gap:3px!important}
 #bulletin-groups .bc-versus{font-size:9px!important}
 #bulletin-groups .bc-date{font-size:9px!important}
 #bulletin-groups .bc-pronos,#bulletin-groups .bc-pronos.two{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:4px!important}
 #bulletin-groups .bc-pronos.two{grid-template-columns:repeat(2,minmax(0,1fr))!important}
 #bulletin-groups .bc-group{display:block!important;padding:3px!important;border-radius:5px!important;min-width:0!important}
 #bulletin-groups .bc-group-top{display:flex!important;min-height:20px!important;gap:3px!important;padding:1px 3px!important;margin:0 0 2px!important;font-size:0!important}
 #bulletin-groups .bc-group-top>span:not(.bc-badge){display:none!important}
 #bulletin-groups .bc-group-picks{display:grid!important;grid-template-columns:1fr!important;gap:2px!important;padding:0!important}
 #bulletin-groups .bc-pickrow{display:flex!important;align-items:center!important;gap:3px!important;margin:0!important;flex-wrap:nowrap!important;min-height:24px!important}
 #bulletin-groups .bc-pickrow-label{width:18px!important;flex:0 0 18px!important;font-size:10px!important}
 #bulletin-groups .bc-signs{gap:2px!important;flex:0 0 auto!important}
 #bulletin-groups .bc-sign{min-width:23px!important;min-height:23px!important;height:23px!important;padding:2px 3px!important;font-size:11px!important;border-radius:4px!important}
 #bulletin-groups .bc-extra{min-width:0!important;max-width:none!important;flex:1 1 55px!important;min-height:23px!important;padding:1px 2px!important;font-size:9px!important}
 #bulletin-groups .bc-standard-pick{min-height:23px!important;font-size:10px!important;padding:2px!important;width:100%!important}
 #bulletin-groups .bc-jeux{margin:2px 0!important;padding:2px!important}
 #bulletin-groups .bc-go-systems{padding:5px 10px!important;font-size:11px!important}
 @media(max-width:1150px){
  #bulletin-groups .bc-line-body{grid-template-columns:1fr!important}
  #bulletin-groups .bc-pronos,#bulletin-groups .bc-pronos.two{grid-template-columns:repeat(3,minmax(0,1fr))!important}
 }
 @media(max-width:570px){
  #bulletin-groups .bc-pronos,#bulletin-groups .bc-pronos.two{grid-template-columns:1fr!important}
  #bulletin-groups .bc-group{display:grid!important;grid-template-columns:24px minmax(0,1fr)!important;gap:3px!important}
  #bulletin-groups .bc-group-picks{grid-template-columns:repeat(2,minmax(0,1fr))!important}
  #bulletin-groups .bc-pickrow{flex-wrap:wrap!important}
  #bulletin-groups .bc-match-top{flex-wrap:wrap!important}
 }
 @media print{#tc-pronos-ultra-compacts{display:none!important}}
 `;
 document.head.appendChild(style);
})();


/* Suppression visuelle des cotes et densification des blocs de pronostics */
(function(){
 const style=document.createElement('style');
 style.id='tc-sans-cotes-pronos-serres';
 style.textContent=`
 /* Les cotes ne sont plus affichées, sans altérer les calculs ni les données. */
 #tc-all-odds,.tc-all-odds,.tc-bookmaker-field,.tc-odd-on-ticket,
 .tc-odds-intro,.tc-all-odds-grid{display:none!important}
 #bulletin-groups .bc-line{margin:0!important;border-radius:5px!important}
 #bulletin-groups .bc-line-head{min-height:20px!important;padding:2px 5px!important}
 #bulletin-groups .bc-line-body{padding:3px!important;gap:4px!important}
 #bulletin-groups .bc-matches{gap:2px!important}
 #bulletin-groups .bc-match{padding:2px 3px!important;gap:3px!important;min-height:0!important}
 #bulletin-groups .bc-match-edit{gap:2px!important}
 #bulletin-groups .bc-match-top{gap:2px!important}
 #bulletin-groups .bc-group{padding:2px!important;border-radius:4px!important}
 #bulletin-groups .bc-group-top{margin:0 0 1px!important;min-height:17px!important}
 #bulletin-groups .bc-badge{height:18px!important;min-width:18px!important;font-size:10px!important}
 #bulletin-groups .bc-pickrow{min-height:22px!important;margin:0!important}
 #bulletin-groups .bc-sign{height:22px!important;min-height:22px!important;min-width:22px!important;padding:1px 3px!important}
 #bulletin-groups .bc-extra{min-height:22px!important}
 #bulletin-groups .bc-group-picks{gap:1px!important}
 #bulletin-groups .bc-pronos{gap:3px!important}
 #bulletin-groups .bc-match select,#bulletin-groups .bc-match input{min-height:22px!important}
 @media(min-width:1151px){#bulletin-groups .bc-line-body{grid-template-columns:minmax(0,1fr) minmax(0,1.25fr)!important}}
 `;
 document.head.appendChild(style);
})();
