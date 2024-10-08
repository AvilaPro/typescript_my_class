"use strict";
class Banco {
    constructor(id, name, address) {
        this.id = id;
        this.nombre = name;
        this.direccion = address;
    }
}
class CuentasBancarias extends Banco {
    constructor(nroCta, balance, idBank, nameBank, addressBank) {
        super(idBank, nameBank, addressBank);
        this.numeroCta = nroCta;
        this.saldo = balance;
    }
    verSaldo() {
        console.log("Saldo: " + this.saldo);
    }
    retirarDinero() {
        console.log("Metodo para retirar dinero");
    }
}
class Persona {
    constructor(id, name, lastName, dni, born, cta) {
        this.id = id;
        this.nombre = name;
        this.apellido = lastName;
        this.cedula = dni;
        this.fechaNac = born;
        this.cuenta = cta;
    }
}
class Deportista extends Persona {
    constructor(nameSport, id, name, lastName, dni, born, cta) {
        super(id, name, lastName, dni, born, cta);
        this.nameSport = nameSport;
    }
    habilidad() {
        console.log("Yo juego: " + this.nameSport);
    }
}
let Eduardo = new Deportista('Futbol', 19591303, 'Eduardo', 'Apellido', '19591303', new Date('1988-02-21'), new CuentasBancarias('123456', 9000000, 123, 'Mercantil', 'Bqto'));
console.log(Eduardo);
