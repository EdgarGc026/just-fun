/* 
  1.- Crear la clase billete
  2.- Llenar cajaa
  3.- Determinar la cantidad que el usuario desea
  4.- Mostrar la informacion del usuario
*/

//Obtener nuestros datos desde el id de la pagina
var d = document.getElementById("dinero");

//Creamos una variable para acceder al boton y el evento
var resultado = document.getElementById("resultado");

//Obteniendo el boton y el evento del boton
var button = document.getElementById("extraer");
button.addEventListener("click", entregarDinero);

//Creando los campos para los billetitos
var billeteDenominacion100 = document.getElementById("billeteDenominacion100");
var billeteDenominacion50 = document.getElementById("billeteDenominacion50");
var billeteDenominacion20 = document.getElementById("billeteDenominacion20");
var billeteDenominacion10 = document.getElementById("billeteDenominacion10");

//Creamos las variables necesarias
var entregado = [];
var dinero = 0,
  div = 0,
  papeles = 0,
  total = 0,
  auxiliar = 0;

var b50;

var imagenes = [];
imagenes["10"] = "billete10.png";
imagenes["20"] = "billete20.png";
imagenes["50"] = "billete50.png";
imagenes["100"] = "billete100.png";

//1.-Creando la clase billete
class Billete {
  constructor(cantidad, valor) {
    this.imagen = new Image();
    this.cantidad = cantidad;
    this.valor = valor;
    this.imagen.src = imagenes[this.valor];
  }
}

//2.- Llenamos la caja
var caja = [];
caja.push(new Billete(5, 100));
caja.push(new Billete(30, 50));
caja.push(new Billete(2, 20));
caja.push(new Billete(2, 10));

function entregarDinero() {
  dinero = parseInt(d.value);

  for (var bi of caja) {
    if (dinero > 0) {
      div = Math.floor(dinero / bi.valor);

      if (div > bi.cantidad) {
        papeles = bi.cantidad;
      } else {
        papeles = div;
      }

      //Se hace la iteracion para saber el valor de los billetes
      for (var i = 0; i < papeles; i++) {
        entregado.push(new Billete(papeles, bi.valor));
      }
      //Vamos restando
      dinero = dinero - bi.valor * papeles;
      bi.cantidad -= papeles;

      //Seccion donde muestras la cantidad de billetes que tienes
      if (bi.valor == 100) {
        billeteDenominacion100.innerHTML = bi.cantidad;
      }
      if (bi.valor == 50) {
        billeteDenominacion50.innerHTML = bi.cantidad;
      }
      if (bi.valor == 20) {
        billeteDenominacion20.innerHTML = bi.cantidad;
      }
      if (bi.valor == 10) {
        billeteDenominacion10.innerHTML = bi.cantidad;
      }
    }
  }
  if (dinero > 0) {
    resultado.innerHTML =
      "Soy un cajero malo y no darte esa cantidad de dinero :(";
  } else {
    resultado.innerHTML += "<strong>Has retirado: </strong><br/>";
    for (var e of entregado) {
      resultado.innerHTML += "<img src=" + e.imagen.src + " />  ";
    }

    for (var e of entregado) {
      for (var i = 0; i < e.cantidad; i++) {
        entregado.pop();
      }
    }

    resultado.innerHTML += "<hr/>";
  }
}

for (var a of caja) {
  if (a.valor == 100) {
    billeteDenominacion100.innerHTML = a.cantidad;
  }
  if (a.valor == 50) {
    billeteDenominacion50.innerHTML = a.cantidad;
  }
  if (a.valor == 20) {
    billeteDenominacion20.innerHTML = a.cantidad;
  }
  if (a.valor == 10) {
    billeteDenominacion10.innerHTML = a.cantidad;
  }
}
