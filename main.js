import Nodo from "./nodo.js";
import ColaPrioridad from "./colaConPrioridad.js";

class Main {
    constructor() {
        this._colaPriodidad = new ColaPrioridad();
    }

    prueba() {
        this._colaPriodidad.agregar(new Nodo(5,0));
        this._colaPriodidad.agregar(new Nodo(6,0));
        this._colaPriodidad.agregar(new Nodo(7,1));
        this._colaPriodidad.agregar(new Nodo(8,1));
        console.log(this._colaPriodidad.sacar());
        console.log(this._colaPriodidad.sacar());
        console.log(this._colaPriodidad.sacar());
        console.log(this._colaPriodidad.sacar());
    }
}

let m = new Main();
m.prueba();