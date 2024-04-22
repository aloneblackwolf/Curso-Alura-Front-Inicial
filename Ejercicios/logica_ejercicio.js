

//  Pregunta al usuario qué día de la semana es. 
// Si la respuesta es "Sábado" o "Domingo", muestra 
// "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".

let diaSemana = prompt("¿Qué día de la semana es hoy?");

if (diaSemana.toUpperCase() == "SABADO" || diaSemana.toUpperCase() == "DOMINGO") {
    alert("¡Buen fin de semana!");

}else{
    alert("¡Buena semana!");
}


// Verifica si un número ingresado por el usuario es positivo o 
// negativo. Muestra una alerta informativa.

let numero = prompt("Ingresa un número");

if (numero < 0){
    alert(`El numero: ${numero}, es negativo`);
}
else{
    alert(`El numero: ${numero}, ingresado es positivo`);
}

// Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100,
//  muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".

let puntuacion = prompt("Ingresa la puntacion obtenida: ")

if(puntuacion >= 100){
    alert(`Felicidades haz ganado!, con una puntuacion de ${puntuacion}`);
}else{
    alert(`Lo lamento, no has logrado clasificar con una puntuacion de ${puntuacion}`);
}


// Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un
// template string para incluir el valor del saldo.

let mensaje = prompt("Ingrese el valor de su saldo: ");
alert(`El monto de su saldo es de: $${mensaje}`);


//Pide al usuario que ingrese su nombre mediante un prompt. Luego
// muestra una alerta de bienvenida usando ese nombre.

let nombre = prompt("Ingresa tu nombre: ");
alert(`Bienvenido ${nombre}!`);