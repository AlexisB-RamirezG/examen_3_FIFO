export default class Nodo {
    constructor(dato, prioridad) {
        this._dato = dato;
        this._prioridad = prioridad;
        this._next = null;
    }

    get dato() {
        return this._dato;
    }

    get prioridad() {
        return this._prioridad;
    }

    get next() {
        return this._next;
    }

    set next(nNext) {
        this._next = nNext;
    }
}