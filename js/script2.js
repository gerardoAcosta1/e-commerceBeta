//click en agregar, se crea un objeto con el nombre de producto
//y la cantidad de veces que se hizo click

let num = 1;
let obj = {};
function change(valor) {
  document.getElementById("mydiv").innerHTML = num;
  num++;
  if (obj[valor]) {
    obj[valor]++;
  } else {
    obj[valor] = 1;
  }
}

//mostrar banner###########################
let id = 'compra';
const compra = function (lugar) {

  
  let banner = document.getElementById("box2");
  let currentDisplay = banner.style.display;
  
  if (currentDisplay === "none") {
    banner.style.display = "block";
  } else {
    banner.style.display = "none";
  }
  
};
