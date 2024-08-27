//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

const btnToClick = document.createElement('button');
btnToClick.id = 'btnToClick';
btnToClick.textContent = 'Click';

document.body.appendChild(btnToClick);

btnToClick.addEventListener('click', function(event) {

console.log(event);

}
);



//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.


 const inputs = document.querySelectorAll('imput');

 inputs.forEach (function(input) {
inputs.addEventListener('focus', function() {

console.log(input.value);

});

});





//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. 

input.addEventListener('input', function() {


console.log(input.value);


});




//Extra ->Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];



const PrintAlbums = document.getElementById('PrintAlbumHere');



const ul = document.createElement('ul');



albums.forEach (function(album) {



const li = document.createElement('li');
li.textContent = album;


ul.appendChild(li);


}
);

PrintAlbums.appendChild(ul);