class Calculadora {

    constructor() {
        this.resultado = 0;
        this.num1 = 0;
        this.num2 = 0;
    }

    set resultado(oper) {
        switch (oper) {
            case 1:
                this._resultado = this.num1 + this.num2;
                break;
            case 2:
                this._resultado = this.num1 - this.num2;
                break;
        }
    }

    get resultado() {
        var cadena = "El resultado es: " + this._resultado;
        document.getElementById("salida").innerHTML = cadena;
    }

    introducirDatos() {
        this.num1 = parseInt(prompt("Introduce primer numero ?", "0"));
        this.num2 = parseInt(prompt("Introduce segundo numero ?", "0"));
    }

}

function programa(operacion) {
    var objCalcula = new Calculadora();
    objCalcula.introducirDatos();
    objCalcula.resultado = operacion;
    objCalcula.resultado;
}
