/**
 * Crear la clase Figura donde se establezca el punto de partida y el nombre de la figura
 * Pto de partida: x, y
 * nombre: string,
 * +++
 * Ademas agregar a Figura un método para conocer el punto de partida y su nombre (o tipo de figura geometrica).
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Figura = /** @class */ (function () {
    function Figura(x, y, c, n) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (c === void 0) { c = ""; }
        if (n === void 0) { n = ""; }
        this.x = x;
        this.y = y;
        this._color = c;
        this._name = n;
    }
    Object.defineProperty(Figura.prototype, "name", {
        //Modificadores de acceso
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Figura.prototype, "color", {
        set: function (v) {
            this._color = v;
        },
        enumerable: false,
        configurable: true
    });
    //METHODS
    Figura.prototype.mostrarInformacion = function () {
        console.log("El punto inicial de ".concat(this.name, " es: x: ").concat(this.x, ", y: ").concat(this.y));
    };
    return Figura;
}());
var Rectangulo = /** @class */ (function (_super) {
    __extends(Rectangulo, _super);
    //metodo constructor de la clase
    function Rectangulo(x, y, color, nombre, a, b, c, d, ctx) {
        var _this = _super.call(this, x, y, color, nombre) || this;
        _this.ctx = ctx;
        _this._a = a;
        _this._b = b;
        _this._c = c;
        _this._d = d;
        return _this;
    }
    //metodos de la clase
    /**
     * pintarFigura se define obligatoriamente por ser un metodo abstracto de la super clase Figura.
     */
    Rectangulo.prototype.pintarFigura = function () {
        ctx.fillStyle = this._color;
        ctx.fillRect(this._a, this._b, this._c, this._d);
    };
    return Rectangulo;
}(Figura));
/**
 * Aqui comentamos esta instancia debido a que hemos convertido la clase Figura en una clase abstracta y por ende no se puede instancia
 */
// let figurita = new Figura(2,3,"Circulo");
// figurita.mostrarInformacion();
//Defino el canvas antes para poder acceder a el en las instancias de las subclases de Figura.
var canvas = document.getElementById("lienzo");
var ctx = canvas.getContext("2d");
/**
 * Instancias de objetos para la clase 3 De Herencia
 */
var pared = new Rectangulo(0, 50, "#00C7B3", "puerta", 0, 50, 80, 100, ctx);
console.log(pared);
//Selector del canvas
var canvas = document.getElementById("lienzo");
var ctx = canvas.getContext("2d");
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
    ctx.moveTo(50, 75);
    ctx.fillStyle = "#5B94FE";
    ctx.fillRect(50, 75, 20, 75);
    //pintado la ventana superior
    ctx.fillStyle = "yellow";
    ctx.moveTo(40, 37);
    ctx.arc(40, 37, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
}
