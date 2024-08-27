//2.1 Inserta dinamicamente en un html un div vacio con javascript.

const newDiv = document.createElement("div");

console.log(newDiv);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const InsertDivP =document.createElement("div");

InsertDivP.innerText = "p";

console.log(InsertDivP);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 


const InsertDiv6p =document.createElement("div");

for (let i=0; i < 6; i++) {
const newPs =document.createElement("p");
newPs.innerText = `parrafo ${i + 1} `;

InsertDiv6p.appendChild(newPs);

}

//2.4 Inserta dinamicamente con javascript en un html una p con el 


const InsertPdynamic = document.createElement("p");            
InsertPdynamic.innerText ="Soy dinámico!";
document.body.appendChild(InsertPdynamic);
 

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

constInsertH2 =document.querySelector(".fn-insert-here");
constInsertH2.innerText = "Wubba Lubba dub dub";
document.body.appendChild(constInsertH2);
 
constInsertP =document.querySelector(".fn-insert-here");
constInsertP.innerText = "Wubba Lubba dub dub";
document.body.appendChild(constInsertP);


//2.6 Basandote en el siguiente array crea una lista ul > li con 

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const UlList = document.createElement("ul");

apps.forEach (function(app) {
const LiList =document.createElement("li");
LiList.innerText = app;
UlList.appendChild(LiList);

document.body.appendChild(UlList);


}) ;


//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const DeleteClass = document.querySelectorAll(".fn-remove-me");

DeleteClass.forEach(function(element) {
element.parentNode.removeChild(element);
 
});


//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 


const InsertPBetween = document.createElement("p");
InsertPBetween.innerText = "Voy en medio!";

const firstDiv =document.querySelector(".firstDiv");
const secondDiv =document.querySelector(".secondDiv");

if (firstDiv & secondDiv) {
firstDiv.parentNode.insertBefore(insertPBetween, secondDiv);
};
    
//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 


const InsertPinDivs = document.getElementsByClassName('fn-insert-here');

for (let i=0; i < InsertPinDivs.length; i++) {
const newP = document.createElement('p');
newP.textContent = 'Voy dentro!';
InsertPinDivs[i].appendChild(newP);
document.body.appendChild(InsertPinDivs);

}