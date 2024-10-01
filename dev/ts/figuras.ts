interface vertice {
    x: number,
    y: number
}

class Figura {
    x: number | undefined;
    y: number | undefined;
    name: string | undefined;
}

class Rectangulo {
    private _name: string = "";
    ctx: any
    crearRectangulo(startX: number, startY: number, width: number, height: number, color: string) {
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.fillRect(startX, startY, width, height);
        this.ctx.closePath();
    }
    get name():string{
        return this._name;
    }
    set name(newName: string){
        this._name = newName;
    }
}
class Triangulo {
    private _name: string = "";
    ctx: any;
    createTriangle(verticeA: vertice, verticeB: vertice, verticeC: vertice, color: string = "black") {
        this.ctx.beginPath();
        this.ctx.moveTo(verticeA.x, verticeA.y);
        this.ctx.lineTo(verticeB.x, verticeB.y);
        this.ctx.lineTo(verticeC.x, verticeC.y);
        this.ctx.closePath();
        this.ctx.stroke();
        this.ctx.fillStyle = color;
        this.ctx.fill();
    }
    get name():string{
        return this._name;
    }
    set name(newName: string){
        this._name = newName;
    }
}
class Circulo {
    private _name: string = "";
    ctx: any;
    createCircle(center: vertice, radio: number, color: string = "black") {
        this.ctx.arc(center.x, center.y, radio, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.fillStyle = color;
        this.ctx.fill();
    }
    get name():string{
        return this._name;
    }
    set name(newName: string){
        this._name = newName;
    }
}



var canvas: any = document.getElementById("canvas");

let ancho = window.screen.availWidth;
let alto = window.screen.availHeight;
canvas.width = ancho;
canvas.height = alto;

if (canvas.getContext) {
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo((ancho * 0.05), (alto * 0.4));
    ctx.lineTo((ancho * 0.83), (alto * 0.4));
    ctx.lineTo((ancho * 0.45), (alto * 0.1));
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    //cuadro amarillo
    ctx.beginPath();
    // ctx.moveTo((ancho*0.2), (alto*0.4));
    ctx.fillStyle = "yellow"
    ctx.fillRect((ancho * 0.2), (alto * 0.4), ancho * 0.5, alto * 0.47);
    ctx.closePath();
    //EL SOl
    ctx.arc((ancho * 0.87), (alto * 0.13), (alto * 0.1), 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
}