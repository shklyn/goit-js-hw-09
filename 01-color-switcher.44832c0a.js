!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=null;t.disabled=!0,e.disabled=!1,e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,d=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,clearInterval(d)}))}();
//# sourceMappingURL=01-color-switcher.44832c0a.js.map
