(function(){'use strict';
var url='https://api.github.com/repos/gillesgallon/TOTOCALCIO-PRO/commits?per_page=1';
var panel=document.createElement('div');panel.id='tc-update-panel';
panel.style.cssText='position:fixed;right:12px;bottom:12px;z-index:10000;background:#152c40;color:white;padding:10px;border-radius:9px;box-shadow:0 3px 15px #0005;font:13px Arial;max-width:320px';
panel.innerHTML='<span id="tc-update-status">Vérification de la version…</span> <button type="button" id="tc-update-check">Vérifier</button> <button type="button" id="tc-update-reload" hidden>Actualiser</button>';
document.body.appendChild(panel);
var s=panel.querySelector('#tc-update-status'),b=panel.querySelector('#tc-update-check'),r=panel.querySelector('#tc-update-reload'),baseline=null;
[b,r].forEach(function(x){x.style.cssText='background:#ffd54f;color:#111;border:0;border-radius:5px;padding:6px;cursor:pointer;margin:3px'});
function check(){b.disabled=true;fetch(url,{cache:'no-store'}).then(function(x){if(!x.ok)throw Error();return x.json()}).then(function(a){var sha=a&&a[0]&&a[0].sha;if(!sha)throw Error();if(baseline===null){baseline=sha;s.textContent='TOTOCALCIO PRO · version en ligne';}else if(baseline!==sha){s.textContent='Nouvelle mise à jour disponible !';r.hidden=false;}else{s.textContent='TOTOCALCIO PRO · à jour';}}).catch(function(){s.textContent='Vérification indisponible';}).finally(function(){b.disabled=false;});}
b.onclick=check;r.onclick=function(){location.reload();};check();setInterval(function(){if(!document.hidden)check();},600000);
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
