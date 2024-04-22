// Muestra una ventana emergente en la pagina


let intentos = 0;

// let palabraVeces = "vez";
// Definimos un numero secreto
let numeroSecreto = 6;
// Entrada de datos en una ventana
let numeroUsuario = 0;
let maximoIntentos = 2;

while (numeroUsuario != numeroSecreto){
    numeroUsuario = prompt("Indicame un numero del 1-10 por favor: ");

    console.log(numeroUsuario);
    // realizamos una condicional para verificar que el numero ingresado sea correcto o no
    if (numeroUsuario == numeroSecreto) {
        // Aqui se mostraron el numero, la cantidad de intentos en que lo realizo y al final se hizo uso del operador ternario para mostrar vez o veces
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ?'vez' : 'veces' }...`);
    }else{
        if(numeroUsuario > numeroSecreto){
            alert(`Lo siento, el numero secreto es menor al numero: ${numeroUsuario}`);
        }else{
                console.log(`Numero ingresado : ${numeroUsuario}`);
                alert(`Lo siento, el numero secreto es mayor al numero: ${numeroUsuario}`);
            }
            intentos++;
            // palabraVeces = "veces";
            if(intentos > maximoIntentos){
                alert(`Llegaste al máximo de ${intentos} número máximo de intentos.`)
                break;
            }
        }
}
console.log(intentos);





// alert(`Lo siento, no acertaste el numero secreto con el numero: ${numeroUsuario}`);
// console.log(`Numero ingresado : ${numeroUsuario}`);
// console.log(`Numero secreto : ${numeroSecreto}`);

// if(numeroUsuario > 0 && numeroUsuario <18){
//     console.log("El usuario es menor de edad y tiene ", numeroUsuario, "años." );
// }else if(numeroUsuario >= 18 && numeroUsuario <= 100){
//     console.log("El usuario es mayor de edad y tiene ", numeroUsuario, "años." );
// }else{
//     console.log("La edad ingresada no es valida. ");
// }
