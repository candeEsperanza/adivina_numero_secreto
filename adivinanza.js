const generarNumAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
};

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if (numeroAdivinado == numeroSecreto) { //le quito el estricctamente igual ya que no me tomaba el numero secreto, creo que es porque es un String.
        console.log('Felicitaciones, adivinaste el numero secreto');

    }else if(numeroAdivinado > numeroSecreto){
        console.log('El numero secreto es MENOR, sigue intentando');
    }else{
        console.log('El numero secreto es MAYOR, sigue intentando')
    }
};

module.exports = {
    generarNumAleatorio,
    verificarAdivinanza
};