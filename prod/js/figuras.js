"use strict";
class Figura {
}
class Rectangulo {
    constructor() {
        this._name = "";
    }
    crearRectangulo(startX, startY, width, height, color) {
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.fillRect(startX, startY, width, height);
        this.ctx.closePath();
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
}
class Triangulo {
    constructor() {
        this._name = "";
    }
    createTriangle(verticeA, verticeB, verticeC, color = "black") {
        this.ctx.beginPath();
        this.ctx.moveTo(verticeA.x, verticeA.y);
        this.ctx.lineTo(verticeB.x, verticeB.y);
        this.ctx.lineTo(verticeC.x, verticeC.y);
        this.ctx.closePath();
        this.ctx.stroke();
        this.ctx.fillStyle = color;
        this.ctx.fill();
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
}
class Circulo {
    constructor() {
        this._name = "";
    }
    createCircle(center, radio, color = "black") {
        this.ctx.arc(center.x, center.y, radio, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.fillStyle = color;
        this.ctx.fill();
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
}
var canvas = document.getElementById("canvas");
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
    ctx.fillStyle = "yellow";
    ctx.fillRect((ancho * 0.2), (alto * 0.4), ancho * 0.5, alto * 0.47);
    ctx.closePath();
    //EL SOl
    ctx.arc((ancho * 0.87), (alto * 0.13), (alto * 0.1), 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
}
