const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let n=null;t.addEventListener("click",(function(){t.disabled=!0,n=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.66bc9f53.js.map
