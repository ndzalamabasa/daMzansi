(()=>{"use strict";class t{constructor(t,e,n=0,s=0,o){this.userName=t,this.userAvatar=e,this.position=n,this.playerTurn=s,this.avatarSettings=o}userStatsDiv(){const t=document.createElement("div");return t.id=this.userName,t.classList.add("text-white"),t}move(t){return this.position+t}positionUser(){this.setUserAvatar(this.avatarSettings),document.getElementById(this.position).appendChild(this.avatarSettings)}setUserAvatar(){return this.avatarSettings.setAttribute("src",this.userAvatar)}indicateUserTurn(){const t=this.userName[0].toUpperCase()+this.userName.slice(1),e=document.createElement("img");e.classList.add("absolute","right-10","h-20","w-20"),e.setAttribute("src",this.userAvatar);const n=document.getElementById("whosTurnIsIt");n.innerHTML=t+"'s Turn",n.children>0?n.children.remove():n.appendChild(e)}displayGameStats(t){const e=document.createElement("img");e.classList.add("h-10","w-10"),e.setAttribute("src",this.userAvatar),t.gameStats.appendChild(e),t.gameStats.appendChild(this.userStatsDiv())}}const e={popUpContainer:document.getElementById("pop-up-container"),popUp:document.getElementById("pop-up"),rollDiceButton:document.getElementById("roll-dice"),board:document.getElementById("board"),gameStats:document.getElementById("gameStats")},{popUpContainer:n,popUp:s}=e;function o(){n.classList.remove("hidden")}function i(){n.classList.add("hidden"),a()}function a(){s.innerHTML=""}function c(){return Math.floor(6*Math.random())+1}const{popUp:r}=e;const d=document.createElement("img");d.classList.add("absolute","top-2.5","right-2.5","h-12","w-12");const l=document.createElement("img");l.classList.add("absolute","top-2.5","right-2.5","h-12","w-12");const u=document.createElement("img");u.classList.add("absolute","top-2.5","right-2.5","h-12","w-12");const m=document.createElement("img");m.classList.add("absolute","top-2.5","right-2.5","h-12","w-12");const p=document.createElement("img");p.classList.add("absolute","top-2.5","right-2.5","h-12","w-12");const h=[d,l,u,m,p],g=(document.getElementById("whosTurnIsIt"),new URLSearchParams(window.location.search).get("list")),{rollDiceButton:E}=e,f=E.cloneNode(!0),v=[];let L,C=document.createElement("img");C.classList.add("absolute","top-2.5","right-2.5","h-12","w-12");const b={},w=[];g.split(",").forEach(((n,s)=>{const o=n.split(":");b[o[0]]=new t(o[0],o[1],0,s,h[s]),b[o[0]].displayGameStats(e)}));let T=0,y=Object.keys(b);function S(){const t=b[y[T]];L=t,T++,T===y.length&&(T=0),C=L.avatarSettings,L.setUserAvatar(),L.indicateUserTurn()}function A(t){if(i(),L.position+t>50){let e=L.position+t;e-=50,L.position=L.position-e}50==L.position?alert("You Win"):L.position=L.position+t,L.positionUser(w[L.playerTurn]);const e=L.userName[0].toUpperCase()+L.userName.slice(1);document.getElementById(L.userName).innerHTML=`${e}'s Position: ${L.position}`,setTimeout((()=>{(async function(){const t=await fetch("data.json");return await t.json()})().then((t=>{!function(t){const e=t[Math.floor(Math.random()*t.length-1)];e&&function(t){a();const e=document.createElement("div"),n=document.createElement("h3");n.classList.add("text-center");const s=document.createElement("ul");s.classList.add("flex","flex-col","gap-2","my-4","self-start");const d=f.cloneNode(!0);d.innerHTML="Submit Answer",e.classList.add("flex","flex-col","items-center","justify-between"),n.classList.add("text-xl","font-bold","pb-4"),n.innerHTML=t.question,e.appendChild(n),t.options.forEach((t=>{const e=document.createElement("li"),n=document.createElement("input");n.classList.add("mr-2");const o=document.createElement("label");e.classList.add("flex","items-center"),n.setAttribute("type","radio"),n.setAttribute("name","question"),o.innerHTML=t,e.appendChild(n),e.appendChild(o),s.appendChild(e)})),e.appendChild(s),e.appendChild(d),r.appendChild(e),o(),d.onclick=o=>{const a=function(t){if(document.querySelector('input[name="question"]:checked'))return document.querySelector('input[name="question"]:checked').nextSibling.innerHTML===t.answer;alert("Please select an option")}(t);a?function(t,e,n,s){t.removeChild(e),t.removeChild(n),s.innerHTML="Congrats! You're moving up!";const o=s.cloneNode(!0),i=c();o.innerHTML=`You got ${i} moves!`,t.appendChild(o),t.appendChild(f),f.onclick=()=>{A(i)}}(e,s,o.target,n):(function(t,e,n,s,o){t.removeChild(e),t.removeChild(n),s.innerHTML="You got it wrong!";const a=document.createElement("h5");a.innerHTML=`The correct answer is <strong>${o.answer}</strong>`,t.appendChild(a);const c=f.cloneNode(!0);t.appendChild(c),c.onclick=()=>{i()}}(e,s,o.target,n,t),S())}}(e)}(t)}))}),1500)}S(),f.innerText="Move",["A","B","C","D","E"].forEach((t=>{for(let e=1;e<=10;e++)v.push(`./assets/images/cards/${t}${e}.svg`)}));const{board:M,rollDiceButton:U}=e;U.addEventListener("click",(function(){console.log(L),o();const t=document.createElement("img");t.setAttribute("src","./assets/images/dice.svg"),t.classList.add("h-1/2","w-1/2","animate-spin"),s.appendChild(t),setTimeout((()=>{!function(t){a();const e=c(),n=document.createElement("h3");n.classList.add("text-3xl","font-bold"),n.innerHTML=1===e?`You got ${e} move`:`You got ${e} moves`;const o=C.cloneNode(!0);o.classList.remove("absolute","top-2.5","right-2.5","h-12","w-12"),s.appendChild(o),s.appendChild(n),s.appendChild(f),f.onclick=()=>{t(e)}}(A)}),2e3)})),function(t){const e=[];let n=1;return t.forEach(((t,s)=>{const o=document.createElement("div"),i=document.createElement("img");o.classList.add("card","w-15","rounded-lg","relative"),o.setAttribute("id",n),i.setAttribute("src",t),o.appendChild(i),n++,e.push(o)})),e.reverse()}(v).forEach((t=>{M.appendChild(t)}))})();