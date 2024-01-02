const readlineSync = require('readline-sync');
const { generarNumAleatorio, verificarAdivinanza } = require('./adivinanza');

const obtenerNumeroUser = () => {
    return readlineSync.question('Ingresa un numero: ');
};

const juegoAdivinanza = () => {
    const numeroSecreto = generarNumAleatorio();
    let numeroAdivinado = 0;

    console.log('Bienvenido a Adivina el numero secreto');
    console.log('Intenta adivinar el numero aleatorio del 1 al 100. \n');

    while (numeroAdivinado != numeroSecreto) { //le saque el estrictamente desigual ya que la aplicacion no termina al adivinar.
        numeroAdivinado = obtenerNumeroUser();
        verificarAdivinanza(numeroSecreto,numeroAdivinado);
    }
};

juegoAdivinanza();