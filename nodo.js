class Nodo{
	constructor(n){
		this._dato = n;
		this._sig = null;
		this._ant = null;
		this._izq = null;
		this._der = null;
	}
	get dato(){return this._dato;}
	get sig(){return this._sig;}
	get ant(){return this._ant;}
	set sig(v){this._sig = v;}
	set ant(v){this._ant = v;}
}