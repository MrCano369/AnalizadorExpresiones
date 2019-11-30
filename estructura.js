class Pila{
	constructor(){
		this._ultimo = null;
	}
	get ultimo(){return this._ultimo;}

	agregar(nuevo){
		if (this._ultimo) {
			nuevo.ant = this._ultimo;
			this._ultimo = nuevo;
		}else{
			this._ultimo = nuevo;
		}
	}

	sacar(){
		var byeNodo = this._ultimo;
		this._ultimo = byeNodo.ant;
		return byeNodo;
	}

	imprimir(a = this._ultimo){
		console.log(a.dato);
		if (a.ant) {
			this.imprimir(a.ant);
		}
	}
}

class ListaDoble{
	constructor(){
		this._primero = null;
		this._ultimo = null;
		this._pila = new Pila();
	}
	get primero(){return this._primero;}
	get ultimo(){return this._ultimo;}
	get pila(){return this._pila;}

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

	plantar(nodo){
		nodo.izq = nodo.ant;
		nodo.der = nodo.sig;
		this.eliminar(nodo.ant);
		this.eliminar(nodo.sig);
	}

	generarArbol(){
		var actual = this._primero;
		while(actual){
			if (actual.dato == "*" || actual.dato == "/") {
				this.plantar(actual);
			}
			actual = actual.sig;
		}

		actual = this._primero;
		while(actual){
			if (actual.dato == "+" || actual.dato == "-") {
				this.plantar(actual);
			}
			actual = actual.sig;
		}

		this.preOrder();


	}

	imprimir(p = this._primero){
		console.log(p.dato);
		if (p.sig) {
			this.imprimir(p.sig);
		}
	}

	calcular(){

	}
	
	preOrder(r = this._primero){
		console.log(r.dato);
		this._pila.agregar(new Nodo(r.dato));
		if (r.izq) {
			this.preOrder(r.izq);
		}
		if (r.der) {
			this.preOrder(r.der);
		}
	}
}