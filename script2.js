let arreglo = ['unacadena', 3, 9, 1, 10, 500, 1, 10, true];

function ordenarArregloDescendente(arreglo) {
    let resultado = [];
    if (!arreglo || !Array.isArray(arreglo)) {
        console.log('ingrese un arreglo de prueba por favor');
        return;
    }
    for (let i = 0; i < arreglo.length; i++) {
        if (typeof arreglo[i] === 'number') {
            resultado.push(arreglo[i]);
        }
    }
    if (resultado.length > 0) {
        for (let i = 0; i < resultado.length - 1; i++) {
            for (let j = 0; j < resultado.length - 1 - i; j++) {
                // compara los elementos para validar si el numero anterior es menor al siguiente
                if (resultado[j] < resultado[j + 1]) {
                    // almaceno en una variable temporal el valor de la posicion actual
                    let valorActual = resultado[j];
                    //en la posicion actual almaceno el valor de la posicion siguiente
                    resultado[j] = resultado[j + 1];
                    //en la posicion siguiente almaceno el valor de la posicion actual
                    resultado[j + 1] = valorActual;
                }
            }
        }
    }
    return resultado;
}

console.log(ordenarArregloDescendente(arreglo));