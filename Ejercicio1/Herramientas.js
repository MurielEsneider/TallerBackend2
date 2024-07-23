class Herramietas{
    constructor(pinzas, martillo){
        this.pinzas = pinzas
        this.martillo = martillo
    }
    Estado(){
        "Las herramientas son necesarias para tareas de mantenimineto"
    }
}
class Hijo extends Herramietas{
    constructor(pinzas, martillo, pulidora){
        super(pinzas, martillo)
        this.pulidora = pulidora
    }
    Estado(){
      return "primer mensaje: Las herramientas mecánicas son básicas y manejables"
    }

}
class Hijo2 extends Herramietas{
    constructor(pinzas, martillo, pulidora, taladro){
        super(pinzas, martillo, pulidora)
        this.taladro = taladro
    }
    Estado(){
        "Las herramientas eléctricas o electrónicas son de alta precisión"
    }
}

let objHerramienta = new Herramietas();
console.log(herramienta.Estado());

let objHerramienta2 = new Hijo();
console.log(objHerramienta2());

let objHerramienta3 = new Hijo2();
console.log(objHerramienta2());