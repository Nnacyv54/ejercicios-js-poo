//se ingresa un numero por teclado
let numero = prompt('ingrese un numero');
//usando el bucle for se busca la serie fibonacci: siguiente = actual + anterior
function fibonacci(numero) {
    if (numero <= 1) {
        return numero;
    }
    let anterior = 0;
    let actual = 1;
    let cadena = '0,1';
    for (let contador = 2; contador <= numero; contador++) {
        let siguiente = anterior + actual;
        anterior = actual;
        actual = siguiente;
        cadena = cadena.concat(',').concat(actual);
    }
    return cadena;
}
// validaciones para el numero ingresado
if (isNaN(numero)) {
    console.log('ingrese solo numeros');
} else if (numero < 0) {
    console.log('no se aceptan numeros negativos');
} else {
    console.log('fib: ' + fibonacci(numero));
}
