export default class ColaPrioridad {
    constructor() {
        this._start = null;
    }

    get cola() {
        return this._start;
    }

    agregar(nodo) {
        if (this._start == null) {
            this._start = nodo;
        } else {
            let start = this._start;
            while(start != null) {
                if(start.next == null) {
                    start.next = nodo;
                    return;
                }
                start = start.next;
            }
        }
    }

    sacar() {
        if (this._start.prioridad == 1) {
            let start = this._start;
            this._start = start.next;
            return start;
        } else {
            let anteriorAPrioridad = this._buscarPorPriodidad(this._start);
            if (anteriorAPrioridad != null) {
                let apuntador = anteriorAPrioridad.next;
                anteriorAPrioridad.next = anteriorAPrioridad.next.next;
                return apuntador;
            } else {
                let start = this._start;
                this._start = start.next;
                return start;
            }
        }
    }

    _buscarPorPriodidad(start) {
        while (start.next != null) {
            if (start.next.prioridad == 1) {
                return start;
            }
            start = start.next;
        }
        return null;
    }
}