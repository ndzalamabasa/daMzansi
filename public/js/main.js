(()=>{"use strict";const e=document.querySelectorAll(".avatar"),t="./assets/images/avatars/";e.forEach((e=>{e.addEventListener("click",(e=>{const s=e.target,c=s.getAttribute("src"),l=c.lastIndexOf("/"),r=c.lastIndexOf(".");let a=c.slice(l+1,r);const i=c.slice(r+1);if(c.includes("selected")){a=a.replace("-selected","");const e=`${t}${a}.${i}`;s.setAttribute("src",e)}else{const e=`${t}${a}-selected.${i}`;s.setAttribute("src",e)}}))}))})();