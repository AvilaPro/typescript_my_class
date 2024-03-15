/**
 * Crear la clase Figura donde se establezca el punto de partida y el nombre de la figura
 * Pto de partida: x, y
 * nombre: string,
 * +++
 * Ademas agregar a Figura un método para conocer el punto de partida y su nombre (o tipo de figura geometrica).
 */

abstract class Figura {
   //ATTRIBUTES
   //posicion inicial en X y Y
   protected x: number;
   protected y: number;
   _color: string;
   //nombre de la figura geométrica
   private _name: string;

   constructor(x=0,y=0,c="",n=""){
    this.x = x;
    this.y = y;
    this._color = c;
    this._name = n;
   }

   //Modificadores de acceso
   public get name():string{
    return this._name;
   }
   public set name(v : string) {
    this._name = v;
   }
   public set color(v : string) {
    this._color = v;
   }
   
   //METHODS
   mostrarInformacion(){
    console.log(`El punto inicial de ${this.name} es: x: ${this.x}, y: ${this.y}`);
   }
   //definicion del método abstracto "pintarFigura"
   public abstract pintarFigura():any;
}

class Rectangulo extends Figura {
    //atributos de la clase
    private _a:number;
    private _b:number;
    private _c:number;
    private _d:number;

    //metodo constructor de la clase
    constructor(x:number,y:number,color:string,nombre:string,a:number,b:number,c:number,d:number, public ctx: CanvasRenderingContext2D) {
        super(x,y,color,nombre);
        this._a = a;
        this._b = b;
        this._c = c;
        this._d = d;
    }

    //metodos de la clase
    /**
     * pintarFigura se define obligatoriamente por ser un metodo abstracto de la super clase Figura.
     */
    public pintarFigura() {
        ctx.fillStyle = this._color;
        ctx.fillRect(this._a, this._b, this._c, this._d);
    }

}

/**
 * Aqui comentamos esta instancia debido a que hemos convertido la clase Figura en una clase abstracta y por ende no se puede instancia
 */
// let figurita = new Figura(2,3,"Circulo");
// figurita.mostrarInformacion();

//Defino el canvas antes para poder acceder a el en las instancias de las subclases de Figura.
var canvas = document.getElementById("lienzo") as HTMLCanvasElement;
var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
/**
 * Instancias de objetos para la clase 3 De Herencia
 */
let pared: Rectangulo = new Rectangulo(0, 50, "#00C7B3", "puerta", 0, 50, 80, 100, ctx);
console.log(pared);

//Selector del canvas
var canvas = document.getElementById("lienzo") as HTMLCanvasElement;
var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

console.log(canvas);
//comprobando que el canvas existe
if (canvas.isConnected && canvas != null) {
    //Dibujando el triangulo
    ctx.beginPath();
    ctx.moveTo(0, 50);
    ctx.lineTo(80, 50);
    ctx.lineTo(40, 25);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //pintar la pared de la casa
    // ctx.moveTo(0,50);
    // ctx.fillStyle = "#00C7B3";
    // ctx.fillRect(0,50,80,100);
    pared.pintarFigura();

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