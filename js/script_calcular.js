$(function(){
	function calcular(){
	var numero1 = parseInt($("#txt_numero1").val());
	var numero2 = parseInt($("#txt_numero2").val());
	var operacion = $("#operacion").val();
	var resultado;

	switch(operacion)
	{
		case "suma":
		resultado = numero1 + numero2;
		break;
		case "resta":
		resultado = numero1 - numero2;
		break;
		case "multiplicacion":
		resultado = numero1 * numero2;
		break;
		case "division":
		resultado = numero1 / numero2;
		break;
	}

	$("#txt_resultado").val(resultado);
	alert(resultado);
	}

	$("#btn_calcular").on("click",function(){
	calcular();
	})
});