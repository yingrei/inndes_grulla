var num1, num2;
var respuesta;
var indiceOpCorrecta;
Puntos= 0;
necesqrios= 10;

txt_resta = document.getElementById("resta");
op1 = document.getElementById ("op1");
op2 = document.getElementById ("op2");
op3 = document.getElementById ("op3");
txt_msj = document.getElementById("msj");
txt_resultado = document.getElementById("resultado");

function comenzar(){
	txt_resultado.innerHTML = "?"; 
	txt_msj.innerHTML = "";
	num1 = Math.round(Math.random()*50);
	num2 = Math.round(Math.random()*50);
	
	if (num1 > num2) {
		respuesta = num1 - num2;
		txt_resta.innerHTML = num1 + " - " + num2 + " = ";	
}		else {
				respuesta = num2 - num1;
			txt_resta.innerHTML = num2 + " - " + num1 + " = ";
}
	indiceOpCorrecta = Math.round(Math.random()*2);
	if (indiceOpCorrecta==0) {
		 op1.innerHTML = respuesta;
		 op2.innerHTML = respuesta + 2;
		 op3.innerHTML = respuesta + 1;
	}
	if(indiceOpCorrecta ==1){
		op2.innerHTML = respuesta + 2;
		op1.innerHTML = respuesta;
		op3.innerHTML = respuesta + 1;
	}
	if(indiceOpCorrecta==2){
		op3.innerHTML = respuesta + 1;
		op1.innerHTML = respuesta + 2;
		op2.innerHTML = respuesta;
	}
}
function controlarRespuesta(opcionElegida){
	txt_resultado.innerHTML = opcionElegida.innerHTML;

	if (respuesta == opcionElegida.innerHTML) {
		Puntos++;
		document.getElementById("Puntos").innerHTML = "Puntos: <b>" + Puntos + "/" + necesqrios +"  </b>";	
		if (Puntos == 10){
			alert("felicidades ganaste");
		}
		txt_msj.innerHTML = "EXCELENTE!!";
		txt_msj.style.color = "black";
		setTimeout(comenzar, 2000);
	}else{
		Puntos--;
		document.getElementById("Puntos").innerHTML= "Puntos: <b>" + Puntos + "/" + necesqrios +"  </b>";	
		if (Puntos == 0) {
			alert("PERDISTE");
		}
		txt_msj.innerHTML = "INTENTA DE NUEVO";
		txt_msj.style.color = "red"; 
		setTimeout(limpiar, 2000);
	}
}
function limpiar(){
		txt_resultado.innerHTML = "?"; 
	txt_msj.innerHTML = "";
}
  
comenzar();