// CONTENIDO DE LA PRÁCTICA:
// Vamos a añadir elementos en una lista (con la clase "color-list") con javascript a partir del array aportado en este documento, en la constante "colorList" (ver imagen en el proyecto "ejemplo_lista.png"). 

// Como se puede apreciar en la imagen, cada elemento que esté en una posición par de de la lista tiene que tener la clase "color-item--odd". Esta clase debe añadirse desde javascript, NO haciendo uso del selector css nth-of-type(odd) o similares. NOTA: En este caso vamos a considerar un elemento par pensando en el primer elemento como el 1 no como el 0.

// Cada elemento del listado contendrá:
//    * El nombre del color.
//    * Una muestra en la que se ve el color.
//    * Un botón que modifica el color del siguiente elemento de la lista.
//    * Un botón que modifica el color del fondo de la página.
// La información de cada item la obtendremos de cada objeto del array "colorList"

// La estructura de un item de la lista deberá quedar con de la siguiente forma en el HTML (ejemplo del item para el color "white"):
// <li class="color-item">
// 	<div class="color-name">Color: white</div>
// 	<div class="color-show">Muestra</div>
// 	<button class="color-set">Next item color</button>
// 	<button class="color-set">Page color</button>
// </li>

// En esta práctica hay que añadir 4 funcionalidades:
//    * Al hacer click directamente (no en un item o botón) sobre el fondo de la página (elemento body), debe aparecer un alert en el que aparezca la palabra "body".
//    * Al hacer click directamente sobre uno de los items de la lista (no en uno de sus botones) debe aparecer un "alert" en el que se indique el nombre de su color.
//    * Al hacer click sobre el botón con el texto "Next item color" deberá aplicarse el color de ese item al color de fondo del siguiente item (el último item cambia al primero).
//    * Al hacer click sobre el botón con el texto "Page color" deberá aplicarse el color de ese item al color de fondo de la página (elemento body).

// Buena suerte!

const colorList = [
  {
    colorName: 'white',
    hex: '#ffffff'
  },
  {
    colorName: 'red',
    hex: '#ff0000'
  },
  {
    colorName: 'orange',
    hex: '#ffa500'
  },
  {
    colorName: 'yellow',
    hex: '#ffff00'
  },
  {
    colorName: 'orchid',
    hex: '#da70d6'
  },
  {
    colorName: 'pink',
    hex: '#ffc0cb'
  },
  {
    colorName: 'green',
    hex: '#008000'
  },
  {
    colorName: 'silver',
    hex: '#c0c0c0'
  }
];

(function() {
  addElements();
})();

function addElements(){
  let parentElement = document.querySelector('.color-list');
  let count = 1;
  
  document.body.addEventListener("click", alertbody);

  for(color of colorList){
    let li = document.createElement("li");
    
    if(count % 2 == 0){

      li.setAttribute("class", "color-item--odd");
    }else{
        li.setAttribute("class", "color-item");
    }
  
    let div1 = document.createElement("div");
    div1.innerHTML = "Color: " + color.colorName;
    div1.setAttribute("class", "color-name");
    div1.addEventListener("click", alertColor);
    
    let div2 = document.createElement("div");
    div2.innerHTML = "Muestra";
    div2.setAttribute("class", "color-show");
    div2.style.backgroundColor = color.hex;

    let button1 = document.createElement("button");
    button1.textContent = "Next item color";
    button1.setAttribute("class", "color-set");
    button1.addEventListener("click", changeNextColor);

    let button2 = document.createElement("button");
    button2.textContent = "Page color";
    button2.setAttribute("class", "color-set");
    button2.addEventListener("click", changeBackgroundColor);

    li.appendChild(div1);
    li.appendChild(div2);
    li.appendChild(button1);
    li.appendChild(button2);

    parentElement.appendChild(li);

    console.log(color);

    count++;


  }
  console.log("element");


};

 function changeBackgroundColor(){
   let parentLi= this.parentNode;
   let secondChild = parentLi.firstChild.nextElementSibling;
   let color = secondChild.style.backgroundColor;
   document.body.style.backgroundColor = color;

    console.log(color);
  }

   function changeNextColor(){
     let liPadre = this.parentNode;
     let secondChild = liPadre.firstChild.nextElementSibling;
     let color = secondChild.style.backgroundColor;
     let secondLi = liPadre.nextElementSibling;
     secondLi.style.backgroundColor = color;

    console.log(this);
  }

  function alertColor(){
    alert(this.innerHTML.slice(6,20));
  }

  function alertbody(){
    alert("Body");
  }
