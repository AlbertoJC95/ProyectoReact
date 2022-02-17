/*clase principal*/
class Animal
  {
    /*constructor actúa como setters*/
    constructor(nombre, especie, numero_patas, cola){
      this._nombre = nombre
      this._especie = especie
      this._numero_patas = numero_patas
      this._cola = cola
    }
  }

/*clase que hereda de Animal*/
class Vaca extends Animal
  {
    /*constructor actúa como setters*/
    constructor(nombre, especie, numero_patas, cola, leche){
      super(nombre, especie, numero_patas, cola)
      this._leche = leche
    }
    /*aquí se declaran los getters*/
    get name(){
      return this._nombre
    }
    get especie(){
      return this._especie
    }

    get patas(){
      return this._numero_patas
    }

    get cola(){
      return this._cola
    }

    get leche(){
      return this._leche
    }

    saca_leche(){
      return `${this._nombre}, ${this._especie}, ${this._numero_patas}, ${this._cola}, ${this._leche = this._leche - 1}`
    }
  }

/*clase que hereda de Animal*/
class Tigre extends Animal
  {
    /*constructor actúa como setters*/
     constructor(nombre, especie, numero_patas, cola, victimas){
      super(nombre, especie, numero_patas, cola)
      this._victimas = victimas
    }
    /*aquí se declaran los getters*/
    get name(){
      return this._nombre
    }
    get especie(){
      return this._especie
    }

    get patas(){
      return this._numero_patas
    }

    get cola(){
      return this._cola
    }

    get victimas(){
      return this._victimas
    }

    comerPersonas(){
      return `El tigre: ${this._nombre}, es ${this._especie}, tiene ${this._numero_patas} patas, ${this._cola},
       y se comió a ${this._victimas = this._victimas + 1} pobres personas`

    }
  }

/*la instanción ocurrirá en el objeto obj*/
obj = new Vaca("Pancha", "mamifero", 4, true, 12)
console.log(obj.saca_leche())

/*la instanción ocurrirá en el objeto obj1*/
obj1 = new Tigre("Tigger", "mamifero", 4, true, 4)
console.log(obj1.comerPersonas())

/*  Que me da como resultado lo siguiente

"Pancha, mamifero, 4, true, 11"
"El tigre: Tigger, es mamifero, tiene 4 patas, true, y se comió a 4 pobres personas"    */