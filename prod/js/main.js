"use strict";
var precio, cantidad, iva, stsd, stcd, porcDcto, dcto, total;
function getDataFromUser(msg) {
    let aux = prompt(msg);
    if (aux != null) {
        return parseFloat(aux);
    }
    else {
        return 0;
    }
}
precio = getDataFromUser("Ingrese el precio unitario");
cantidad = getDataFromUser("Ingrese la cantidad de unidades");
stsd = precio * cantidad;
if (stsd > 50000) {
    porcDcto = 5;
}
else {
    porcDcto = 2;
}
stcd = stsd - (stsd * porcDcto / 100);
iva = stcd * 0.16;
total = stcd + iva;
console.log(`El precio unitario es ${precio}, la cantidad es ${cantidad}, el subtotal sin descuento es ${stsd}, el descuento que aplica es de ${porcDcto}%, que al descontarse queda en ${stcd}, el iva (16%) de ese monto es ${iva}. El total a pagar es: ${total}`);
