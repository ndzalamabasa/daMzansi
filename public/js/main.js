(()=>{"use strict";class e{constructor(e,t,s=0){this.userName=e,this.userAvatar=t,this.position=s}move(e){return this.position+e}}const t=document.querySelectorAll(".avatar"),s="./assets/images/avatars/";let a;console.log("hello"),t.forEach((t=>{t.addEventListener("click",(t=>{const c=t.target,r=c.getAttribute("src"),l=r.lastIndexOf("/"),n=r.lastIndexOf(".");let o=r.slice(l+1,n);const i=r.slice(n+1);if(r.includes("selected")){o=o.replace("-selected","");const e=`${s}${o}.${i}`;c.setAttribute("src",e)}else{const t=`${s}${o}-selected.${i}`;c.setAttribute("src",t),a=new e(o,`${s}${o}.${i}`)}}))})),document.getElementById("playButton").addEventListener("click",(()=>{a?window.location.href=`./game.html?user=${a.userName}&avatar=${a.userAvatar}`:alert("Please select an avatar to continue")}))})();