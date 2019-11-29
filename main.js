var s = "3*6-7/4*8+1";
var liD = new ListaDoble();

for (var i = 0; i < s.length; i++) {
	liD.agregar(new Nodo(s.charAt(i)));
}

liD.generarArbol();