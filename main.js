function ResolverExpresion(s) {//numeros de un digito
	var Exp = new AnalizadorDeExpresiones();

	for (var i = 0; i < s.length; i++) {
		Exp.agregar(new Nodo(s.charAt(i)));
	}

	var result = Exp.analizarExpresion();
	console.log(result);
}

ResolverExpresion("3*6-7/4*8+1");
