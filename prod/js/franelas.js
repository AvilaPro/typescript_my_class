"use strict";
// Declaracion de variables del sistema
var talla;
var qty;
var precioUnitario = 0;
var porcDesc;
var stsd, stcd, total;
function getDataPrompt(msg) {
    let aux;
    do {
        aux = prompt(msg);
        if (aux != null) {
            return aux;
        }
    } while (aux == null);
}
talla = getDataPrompt("Ingrese la talla a comprar");
talla = talla.toUpperCase();
qty = parseFloat(getDataPrompt("Ingrese la cantidad"));
switch (talla) {
    case "S":
        precioUnitario = 50000;
        break;
    case "M":
        precioUnitario = 55000;
        break;
    case "L":
        precioUnitario = 60000;
        break;
    case "XL":
        precioUnitario = 65000;
        break;
    default:
        alert("Error de talla");
        break;
}
if (qty >= 6 && qty <= 11) {
    porcDesc = 5;
}
else if (qty >= 12 && qty <= 24) {
    porcDesc = 10;
}
else if (qty > 24) {
    porcDesc = 15;
}
else {
    porcDesc = 0;
}
stsd = precioUnitario * qty;
stcd = stsd - (stsd * porcDesc / 100);
total = stcd;
alert('total a pagar: ' + total);
