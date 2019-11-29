class ListaDoble{
	constructor(){
		this._primero = null;
		this._ultimo = null;
	}
	get primero(){return this._primero;}
	get ultimo(){return this._ultimo;}

	set primero(v){this._primero = v;}
	set ultimo(v){this._ultimo = v;}

	agregar(nuevo){
		if (this._primero) {
			nuevo.ant = this._ultimo;
			this._ultimo.sig = nuevo;
			this._ultimo = nuevo;
		}else{
			this._primero = nuevo;
			this._ultimo = nuevo;
		}
	}

	eliminar(nodo){
		if (nodo == this._primero) {
			nodo.sig.ant = null;
			this._primero = nodo.sig;
		}else if (nodo == this._ultimo) {
			nodo.ant.sig = null;
			this._ultimo = nodo.ant;
		}else{
			nodo.ant.sig = nodo.sig;
			nodo.sig.ant = nodo.ant;
		}
	}

	generarRaiz(nodo){
		nodo.izq = nodo.ant;
		nodo.der = nodo.sig;
		this.eliminar(nodo.ant);
		this.eliminar(nodo.sig);
	}

	generarArbol(){
		var actual = this._primero;
		while(actual){
			if (actual.dato == "*" || actual.dato == "/") {
				this.generarRaiz(actual);
			}
			actual = actual.sig;
		}

		actual = this._primero;
		while(actual){
			if (actual.dato == "+" || actual.dato == "-") {
				this.generarRaiz(actual);
			}
			actual = actual.sig;
		}
	}
}