const myModule=(()=>{"use strict";const e=document.getElementById("result"),t=document.querySelector("#btnPerimSquare"),n=document.querySelector("#btnAreaSquare"),r=document.querySelector("#btnPerimTriangle"),u=document.querySelector("#btnAreaTriangle"),d=document.querySelector("#btnDiameCircle"),c=document.querySelector("#btnPerimCircle"),l=document.querySelector("#btnAreaCircle");t.addEventListener("click",()=>{let t=document.getElementById("inputSide");const n=`El perímetro de Cuadrado es: ${(e=>4*e)(Number(t.value))} cm`;e.innerText=n}),n.addEventListener("click",()=>{let t=document.getElementById("inputSide");const n=`El área de Cuadrado es: ${(e=>e*e)(Number(t.value))} cm^2`;e.innerText=n});r.addEventListener("click",()=>{let t=document.getElementById("inputSide1"),n=document.getElementById("inputSide2"),r=document.getElementById("inputSide3");const u=`El perímetro de Triangulo es: ${((e,t,n)=>e+t+n)(t=Number(t.value),n=Number(n.value),r=Number(r.value))} cm`;e.innerText=u}),u.addEventListener("click",()=>{let t=document.getElementById("inputBase"),n=document.getElementById("inputHeight");const r=`El área de Triangulo es: ${((e,t)=>e*t/2)(t=Number(t.value),n=Number(n.value))} cm^2`;e.innerText=r});const i=e=>2*e;d.addEventListener("click",()=>{let t=document.getElementById("inputRadio");t=Number(t.value);const n=`El diámetro de Circulo es: ${i(t)} cm`;e.innerText=n}),c.addEventListener("click",()=>{let t=document.getElementById("inputRadio");const n=`El perímetro de Circulo es: ${(e=>i(e)*Math.PI)(t=Number(t.value))} cm`;e.innerText=n}),l.addEventListener("click",()=>{let t=document.getElementById("inputRadio");const n=`El área de Circulo es: ${(e=>e*e*Math.PI)(t=Number(t.value))} cm^2`;e.innerText=n})})();