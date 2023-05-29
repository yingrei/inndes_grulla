var num1;
var num2;
var respuesta;
var indiceOpCorrecta;

txt_menor = document.getElementById("mayor");
op1 = document.getElementById ("op1");
op2 = document.getElementById ("op2");
txt_msj = document.getElementById("msj");
txt_resultado = document.getElementById("resultado");

function comenzar(){
	txt_resultado.innerHTML = "?"; 	
	txt_msj.innerHTML = "";
	num1 = Math.round(Math.random()*10);
	num2 = Math.round(Math.random()*9);
	respuesta =>{
	txt_suma.innerHTML = num1 + " > " + num2;
	if (num1 > num2) {
		respuesta = num1 > num2;
		txt_resta.innerHTML = num1 + " > " + num2 + "";	
}		else {
				respuesta = num2 - num1;
			txt_resta.innerHTML = num2 + "<" + num1 + "";
}

	indiceOpCorrecta = Math.round(Math.random()*2);
	if (indiceOpCorrecta= Si) {
		}
	elif(indiceOpCorrecta =No)

	
	}
}
	

function controlarRespuesta(opcionElegida){
	txt_resultado.innerHTML = opcionElegida.innerHTML;

	if (respuesta == opcionElegida.innerHTML) {
		txt_msj.innerHTML = "EXCELENTE!!";
		txt_msj.style.color = "green";
		setTimeout(comenzar, 2000);
	}else{
		txt_msj.innerHTML = "VUELVE A INTENTARLO";
		txt_msj.style.color = "red"; 
		setTimeout(limpiar, 2000);
	}
}
function limpiar(){
		txt_resultado.innerHTML = "?"; 
	txt_msj.innerHTML = "";
}
  
comenzar();