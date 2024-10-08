interface DisciplinaDeportiva{
    nameSport: string;
    habilidad(): any;
}

abstract class Banco{
    id: number;
    nombre: string;
    direccion: string;

    constructor(id:number, name:string, address:string){
        this.id = id;
        this.nombre = name;
        this.direccion = address;
    }

    abstract retirarDinero(): any;
}

class CuentasBancarias extends Banco{
    numeroCta: string;
    saldo: number;

    constructor(nroCta: string, balance: number, idBank:number, nameBank: string, addressBank: string){
        super(idBank, nameBank, addressBank)
        this.numeroCta = nroCta;
        this.saldo = balance;
    }

    verSaldo(){
        console.log("Saldo: " + this.saldo);
    }

    retirarDinero() {
        console.log("Metodo para retirar dinero");
    }
}


class Persona{
    id: number;
    nombre: string;
    apellido: string;
    cedula: string;
    fechaNac: Date;
    cuenta: CuentasBancarias;

    constructor(id:number, name:string, lastName:string, dni:string, born:Date, cta:CuentasBancarias){
        this.id = id;
        this.nombre = name;
        this.apellido = lastName;
        this.cedula = dni;
        this.fechaNac = born;
        this.cuenta = cta;
    }
}

class Deportista extends Persona implements DisciplinaDeportiva{

    nameSport: string;

    constructor(nameSport:string, id:number, name:string, lastName:string, dni:string, born:Date, cta:CuentasBancarias){
        super(id, name, lastName, dni, born, cta);
        this.nameSport = nameSport;
    }

    habilidad() {
        console.log("Yo juego: " + this.nameSport);
    }
}

let Eduardo: Deportista = new Deportista('Futbol', 19591303, 'Eduardo', 'Apellido', '19591303', new Date('1988-02-21'), new CuentasBancarias('123456', 9000000, 123, 'Mercantil', 'Bqto'));

console.log(Eduardo);

