// Una tienda vende 3 tipos de pantalones cuyos precios son los siguientes: Pantalón Tipo A 80000 Pantalón Tipo B 105000 Pantalón Tipo C 250000 Se tiene como datos de entrada de un cliente que realiza una compra: nombre del cliente, tipo de pantalón (A, B o C) que puede ser ingresado en mayúscula o minúscula y cantidad. Se pide mostrar nombre del cliente, tipo de pantalón y cantidad, y monto de la compra. La información de facturación sólo se debe mostrar si la cantidad es un número positivo y el tipo de pantalón es válido. PREMISA: Se vende un sólo tipo de pantalón en una operación de compra. SUGERENCIA: * Anidar por el SINO para determinar el precio unitario. * Anidar por el ENTONCES para condicionar el mostrado de la información de facturación.

/**
 * Deben crear la interfaz del cliente con nombre y apellido, modificar la funcion de getNombre para que se pueda obtener ambos datos y devolver un resultado del tipo de interface declarado.
 * Deben crear una interfaz para Pantalon, donde se indiquen como atributos de la interface, el tipo y el precio unitario. Debe usarse una isntancia de este tipo de interface para asignale los resultado de las funciones getTipoPantalon y getPrecioUnitario.
 * Utilizar dicha instancia para el calculo del monto a pagar y la impresion de resultados.
 */

/**
 * Interfaces del proyecto
 */
interface Cliente{
    nombre: string,
    apellido: string
}
interface Pantalon{
    tipo: string,
    precioUnitario: number
}

//Declaracion de variables
// var tipoPantalon: string;
// var precioUnitario: number;
var pantalon: Pantalon = {
    tipo: '',
    precioUnitario: 0
};
// var nombreCliente: string;
var cliente: Cliente;
var cantidadPantalones: number;
var montoAPagar: number;

/**
 * Funciones utilitarias
 */
function getTipoPantalon():string {
    let auxType :any;
    do {
        auxType = prompt("Indique el tipo de pantalon");
        if (auxType == null) {
            alert("El dato de tipo de pantalon es obligatorio")
        }  
    } while (auxType == null);
    return auxType;
}

function getPrecioUnitario(type:string): number {
    let auxPrice: number;
    type = type.toUpperCase();
    if (type == "A") {
        auxPrice = 80000
    } else {
        if (type == "B") {
            auxPrice = 105000
        } else {
            if (type == "C") {
                auxPrice = 250000
            }else{
                auxPrice = 0;
            }
        }
    }
    return auxPrice;
}
function getCantidad():number {
    let auxQty :any;
    do {
        auxQty = prompt("Indique la cantida de pantalon");
        if (auxQty == null) {
            alert("La cantidad de pantalon es obligatorio")
        }else{
            auxQty = parseFloat(auxQty);
        }
    } while (auxQty == null);
    return auxQty;
}
function getNombre():Cliente {
    let auxName:any;
    let auxLastName: any;
    let auxCliente: Cliente = {
        nombre: "",
        apellido: ""
    };
    do {
        auxName = prompt("Indique su nombre");
        if (auxName == null) {
            alert("El nombre es obligatorio")
        }  
    } while (auxName == null);
    do {
        auxLastName = prompt("Indique su apellido");
        if (auxLastName == null) {
            alert("El apellido es obligatorio")
        }  
    } while (auxLastName == null);
    auxCliente.nombre = auxName;
    auxCliente.apellido = auxLastName;
    return auxCliente;
}
function setMontoAPagar(unitario: number, cantidad: number):number{
    return unitario * cantidad;    
}

/**
 * Procesos
*/
// nombreCliente = getNombre();
cliente = getNombre();
// tipoPantalon = getTipoPantalon();
pantalon.tipo = getTipoPantalon();
// precioUnitario = getPrecioUnitario(tipoPantalon);
pantalon.precioUnitario = getPrecioUnitario(pantalon.tipo);
cantidadPantalones = getCantidad();
montoAPagar = setMontoAPagar(pantalon.precioUnitario, cantidadPantalones);

// //Informar resultados
alert(`Estimado ${cliente.nombre} ${cliente.apellido}, ha seleccionado el tipo de pantalon: ${pantalon.tipo}, cuyo precio unitario es de: ${pantalon.precioUnitario}, y ha indicado querer comprar una cantidad de: ${cantidadPantalones}. Por lo que su monto a pagar es: ${montoAPagar}`)