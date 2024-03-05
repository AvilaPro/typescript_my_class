/**
 * Crear la clase Figura donde se establezca el punto de partida y el nombre de la figura
 * Pto de partida: x, y
 * nombre: string,
 * +++
 * Ademas agregar a Figura un método para conocer el punto de partida y su nombre (o tipo de figura geometrica).
 */

class Figura {
   //ATTRIBUTES
   //posicion inicial en X y Y
   x: number;
   y: number;
   //nombre de la figura geométrica
   name: string;

   constructor(x=0,y=0,n=""){
    this.x = x;
    this.y = y;
    this.name = n;
   }

   //METHODS
   mostrarInformacion(){
    console.log(`El punto inicial de ${this.name} es: x: ${this.x}, y: ${this.y}`);
   }
}

let figurita = new Figura(2,3,"Circulo");
figurita.mostrarInformacion();

//Selector del canvas
var canvas = document.getElementById("lienzo") as HTMLCanvasElement;
console.log(canvas);
//comprobando que el canvas existe
if (canvas.isConnected && canvas != null) {
    var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    //Dibujando el triangulo
    ctx.beginPath();
    ctx.moveTo(0, 50);
    ctx.lineTo(80, 50);
    ctx.lineTo(40, 25);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    //pintar la pared de la casa
    ctx.moveTo(0,50);
    ctx.fillStyle = "#00C7B3";
    ctx.fillRect(0,50,80,100);
    //pintando la ventana
    ctx.moveTo(10, 60);
    ctx.fillStyle = "#DDEB88";
    ctx.fillRect(10, 60, 35, 30);
    //pintando la puerta
    ctx.moveTo(50,75);
    ctx.fillStyle = "#5B94FE";
    ctx.fillRect(50,75,20, 75);
    //pintado la ventana superior
    ctx.fillStyle = "yellow";
    ctx.moveTo(40,37);
    ctx.arc(40,37, 8, 0, Math.PI*2);
    ctx.fill();
    ctx.stroke();



}