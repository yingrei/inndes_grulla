var num1, num2;
var respuesta;
var indiceOpCorrecta;
puntos= 0;
necesqrios= 10;
function comenzar(){
txt_suma = document.getElementById("suma");
op1 = document.getElementById ("op1");
op2 = document.getElementById ("op2");
op3 = document.getElementById ("op3");
txt_msj = document.getElementById("msj");
txt_resultado = document.getElementById("resultado");


	txt_resultado.innerHTML = "?"; 
	txt_msj.innerHTML = "";
	num1 = Math.round(Math.random()*5);
	num2 = Math.round(Math.random()*5);
	respuesta = num1 + num2;
	txt_suma.innerHTML = num1 + " + " + num2 + " = ";

	indiceOpCorrecta = Math.round(Math.random()*2);
	if (indiceOpCorrecta==0) {
		 op1.innerHTML = respuesta;
		 op2.innerHTML = respuesta + 1;
		 op3.innerHTML = respuesta - 1;
	}
	if(indiceOpCorrecta ==1){
		op2.innerHTML = respuesta;
		op1.innerHTML = respuesta + 2;
		op3.innerHTML = respuesta -1;
	}
	if(indiceOpCorrecta==2){
		op3.innerHTML = respuesta;
		op1.innerHTML = respuesta + 1;
		op2.innerHTML = respuesta - 1;
}
}


function controlarRespuesta(opcionElegida){
	txt_resultado.innerHTML = opcionElegida.innerHTML;

	if (respuesta == opcionElegida.innerHTML) {
		puntos++;
		document.getElementById("puntos").innerHTML= "puntos: <b>" + puntos + "/" + necesqrios +"  </b>";	
		if (puntos == 10) {
			alert("felicidades ganaste");
		}
		txt_msj.innerHTML = "EXCELENTE!!";
		txt_msj.style.color = "black";
		setTimeout(comenzar, 2000);
	}

	else{
		puntos--;
		document.getElementById("puntos").innerHTML= "puntos: <b>" + puntos + "/" + necesqrios +"  </b>";	
		if (puntos == 0) {
			alert("PERDISTE");
		}
		txt_msj.innerHTML = "VUELVE A INTENTARLO";
		txt_msj.style.color = "red"; 
		setTimeout(limpiar, 2000);
	}

function limpiar(){
		txt_resultado.innerHTML = "?"; 
		txt_msj.innerHTML = "";
}
}
comenzar();