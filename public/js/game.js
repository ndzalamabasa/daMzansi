(()=>{"use strict";const e=new URLSearchParams(window.location.search).get("user"),t=new URLSearchParams(window.location.search).get("avatar"),n=document.getElementById("board"),s=[],o=document.getElementById("pop-up-container"),i=document.getElementById("pop-up");document.getElementById("roll-dice").addEventListener("click",(function(){c();const e=document.createElement("img");e.setAttribute("src","./assets/images/dice.svg"),e.classList.add("h-1/4","w-1/4","animate-spin"),i.appendChild(e),setTimeout((()=>{i.innerHTML="";const e=Math.floor(6*Math.random())+1;!function(e,t){const n=document.createElement("h3");n.classList.add("text-3xl","font-bold"),n.innerHTML=1===t?`You got ${t} move`:`You got ${t} moves`;const s=a.cloneNode(!0);s.classList.remove("absolute","top-2.5","right-2.5","h-12","w-12"),s.classList.add("h-2/4","w-2/4");const o=document.createElement("button");o.setAttribute("id","moveAround"),o.classList.add('bg-[url("/assets/images/btn-primary-bg.svg")]',"bg-cover","rounded-xl","py-2.5","px-10","mt-4","text-xl","font-semibold","text-slate-200","hover:scale-95","transition-all","duration-200"),o.innerHTML="Move",s.classList.add("animate-pulse"),e.appendChild(s),e.appendChild(n),e.appendChild(o),o.onclick=()=>{!function(e){if(l(),d.position+e>50){let t=d.position+e;t-=50,d.position=d.position-t}50==d.position?alert("You Win"):d.position=d.position+e,document.getElementById(d.position).appendChild(a),setTimeout((()=>{fetch("data.json").then((e=>e.json())).then((e=>{!function(e){const t=e[Math.floor(Math.random()*e.length-1)];t&&function(e){i.innerHTML="";const t=document.createElement("div"),n=document.createElement("h3");n.classList.add("text-center");const s=document.createElement("ul");s.classList.add("flex","flex-col","gap-2","mt-4");const o=document.createElement("button");t.classList.add("flex","flex-col","items-center"),n.classList.add("text-xl","font-bold","mb-2"),o.classList.add('bg-[url("/assets/images/btn-primary-bg.svg")]',"bg-cover","rounded-xl","py-2.5","px-10","mt-8","text-xl","font-semibold","text-slate-200","hover:scale-95","transition-all","duration-200"),n.innerHTML=e.question,t.appendChild(n),e.options.forEach((e=>{const t=document.createElement("li"),n=document.createElement("input");n.classList.add("mr-2");const o=document.createElement("label");t.classList.add("flex","items-center"),n.setAttribute("type","radio"),n.setAttribute("name","question"),o.innerHTML=e,t.appendChild(n),t.appendChild(o),s.appendChild(t)})),t.appendChild(s),o.innerHTML="Submit",t.appendChild(o),i.appendChild(t),c(),o.onclick=()=>{document.querySelector('input[name="question"]:checked')?document.querySelector('input[name="question"]:checked').nextSibling.innerHTML===e.answer?(alert("Correct!"),l()):alert("Wrong!"):alert("Please select an option")}}(t)}(e)}))}),1500)}(t)}}(i,e)}),2e3)})),["A","B","C","D","E"].forEach((e=>{!function(e,t){for(let n=1;n<=10;n++)t.push(`./assets/images/cards/${e}${n}.svg`)}(e,s)}));const a=document.createElement("img");function c(){o.classList.remove("hidden")}a.classList.add("absolute","top-2.5","right-2.5","h-12","w-12"),function(e){n.innerHTML="";let s=1;e.forEach((e=>{const o=document.createElement("div"),i=document.createElement("img");o.classList.add("card","h-28","w-28","rounded-lg","relative"),o.setAttribute("id",s),i.setAttribute("src",e),a.setAttribute("src",t),o.appendChild(i),s++,n.appendChild(o)}))}(s);const d=new class{constructor(e,t,n=0){this.userName=e,this.userAvatar=t,this.position=n}move(e){return this.position+e}}(e,a,0);function l(){o.classList.add("hidden"),i.innerHTML=""}})();