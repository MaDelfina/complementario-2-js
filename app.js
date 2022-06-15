const descuento = 500;
const iva = 0.21;
const opcion1 = 3000;
const opcion2 = 1500;
const opcion3 = 1500;
let productos = [];
let sumaTotal = 0;
let iteraciones = 3;

for(let i=0; i<iteraciones; i++)
{
    let pregunta = prompt("Selecciona los productos:\n1: enteriza = $3000\n 2: corpiño = $1500\n 3: bombacha = 1500");
    productos.push(pregunta);
}

for(let i=0; i<iteraciones; i++){
    if(productos[i] == "1"){
        sumaTotal = sumaTotal + opcion1;
        //sumaTotal(opcion1);
    } else if (productos[i] == "2"){
        sumaTotal = sumaTotal + opcion2;
        //sumaTotal(opcion2);
    } else if(productos[i] == "3"){
        sumaTotal = sumaTotal + opcion3;
        //sumaTotal(opcion3);
    } 
}

sumaIva = sumaTotal * 0.21;
restaDescuento = sumaTotal * iva - descuento;

console.log("Total: " + sumaTotal + " " + "" + "Con Iva: " + sumaIva + " " + "Dscuento: " + restaDescuento);


