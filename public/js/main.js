(()=>{"use strict";class t{constructor(t,e,s=0,a=0,r){this.userName=t,this.userAvatar=e,this.position=s,this.playerTurn=a,this.avatarSettings=r}move(t){return this.position+t}positionUser(){this.setUserAvatar(this.avatarSettings),document.getElementById(this.position).appendChild(this.avatarSettings)}setUserAvatar(){return this.avatarSettings.setAttribute("src",this.userAvatar)}indicateUserTurn(){const t=document.createElement("img");t.classList.add("absolute","top-15","left-20","h-20","w-20"),t.setAttribute("src",this.userAvatar);const e=document.getElementById("whosTurnIsIt");e.innerHTML=this.userName+"'s Turn",e.children>0?e.children.remove():e.appendChild(t)}}const e=document.querySelectorAll(".avatar"),s="./assets/images/avatars/";let a;const r=[];e.forEach((e=>{e.addEventListener("click",(e=>{const i=e.target,n=i.getAttribute("src"),c=n.lastIndexOf("/"),l=n.lastIndexOf(".");let o=n.slice(c+1,l);const u=n.slice(l+1);if(n.includes("selected")){o=o.replace("-selected","");const t=`${s}${o}.${u}`;i.setAttribute("src",t),r.splice(r.indexOf(o),1),console.log(r)}else{const e=`${s}${o}-selected.${u}`;i.setAttribute("src",e),a=new t(o,`${s}${o}.${u}`),r.push(`${a.userName}:${a.userAvatar}`),console.log(r)}}))})),document.getElementById("playButton").addEventListener("click",(()=>{a?window.location.href=`./game.html?user=${a.userName}&avatar=${a.userAvatar}&list=${r}`:alert("Please select an avatar to continue")}))})();