(()=>{"use strict";document.querySelectorAll(".header-menu a").forEach((function(e){const t=location.href,c=e.href;t.includes(c)&&e.classList.add("active")})),new URLSearchParams(location.search).forEach((function(e){const t=document.getElementById(e);t&&(t.checked=!0)})),function(){function e(e){const t=e.currentTarget.getAttribute("aria-controls");document.getElementById(t).classList.toggle("active")}document.querySelectorAll(".questions button").forEach((function(t){t.addEventListener("click",e)}))}(),function(){const e=document.querySelectorAll(".bicycle-images img"),t=document.querySelector(".bicycle-images");function c(e){const c=e.currentTarget;matchMedia("(min-width: 1000px)").matches&&t.prepend(c)}e.forEach((function(e){e.addEventListener("click",c)}))}(),document.querySelector("form"),function(){const e=document.querySelector("#checkbox-menu"),t=document.querySelector(".header-menu");e.addEventListener("click",(function(){t.classList.toggle("active")})),e.addEventListener("click",(function(){t.classList.toggle("hidden")}))}()})();