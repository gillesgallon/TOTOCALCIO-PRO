(function(){'use strict';
var url='https://api.github.com/repos/gillesgallon/TOTOCALCIO-PRO/commits?path=totocalcio.html&per_page=1';
var panel=document.createElement('div');panel.id='tc-update-panel';
panel.style.cssText='position:fixed;right:12px;bottom:12px;z-index:10000;background:#152c40;color:white;padding:10px;border-radius:9px;box-shadow:0 3px 15px #0005;font:13px Arial;max-width:320px';
panel.innerHTML='<span id="tc-update-status">Vérification de la version…</span> <button type="button" id="tc-update-check">Vérifier</button> <button type="button" id="tc-update-reload" hidden>Actualiser</button>';
document.body.appendChild(panel);
var s=panel.querySelector('#tc-update-status'),b=panel.querySelector('#tc-update-check'),r=panel.querySelector('#tc-update-reload'),baseline=null;
[b,r].forEach(function(x){x.style.cssText='background:#ffd54f;color:#111;border:0;border-radius:5px;padding:6px;cursor:pointer;margin:3px'});
function check(){b.disabled=true;fetch(url,{cache:'no-store'}).then(function(x){if(!x.ok)throw Error();return x.json()}).then(function(a){var sha=a&&a[0]&&a[0].sha;if(!sha)throw Error();if(baseline===null){baseline=sha;s.textContent='TOTOCALCIO PRO · version en ligne';}else if(baseline!==sha){s.textContent='Nouvelle mise à jour disponible !';r.hidden=false;}else{s.textContent='TOTOCALCIO PRO · à jour';}}).catch(function(){s.textContent='Vérification indisponible';}).finally(function(){b.disabled=false;});}
b.onclick=check;r.onclick=function(){location.reload();};check();setInterval(function(){if(!document.hidden)check();},600000);
})();