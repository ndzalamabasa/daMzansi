(()=>{"use strict";const e=new URLSearchParams(window.location.search).get("user"),t=new URLSearchParams(window.location.search).get("avatar"),n=document.getElementById("board"),o=[],s=document.createElement("img");["A","B","C","D","E"].forEach((e=>{!function(e,t){for(let n=1;n<=10;n++)t.push(`./assets/images/cards/${e}${n}.svg`)}(e,o)})),document.getElementById("diceNumber").innerHTML;const i=new class{constructor(e,t,n=0){this.userName=e,this.userAvatar=t,this.position=n}move(e){return this.position+e}}(e,s,0);document.getElementById("moveAround").onclick=()=>{const e=Math.floor(1+6*Math.random());i.position=i.position+e,document.getElementById(i.position).appendChild(s),s.classList.add("absolute","top-2.5","right-2.5","h-12","w-12"),console.log(i)},function(e){n.innerHTML="";let o=1;e.forEach((e=>{const i=document.createElement("div"),a=document.createElement("img");i.classList.add("card","h-28","w-28","rounded-lg","relative"),i.setAttribute("id",o),a.setAttribute("src",e),s.setAttribute("src",t),i.appendChild(a),o++,n.appendChild(i)}))}(o)})();