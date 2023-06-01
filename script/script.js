/**Ejercicio 1
 * Escribe un programa que imprima los números del 1 al 100. 
 * Pero para los múltiplos de tres imprime "Fizz" en lugar del número y para los 
 * múltiplos de cinco imprime "Buzz". Para los números que son múltiplos de ambos 
 * tres y cinco, imprime "FizzBuzz"
 * .*/
function fizzBuzz() {
    let caso1 = "Fizz";
    let caso2 = "Buzz";

    for (let i = 1; i <= 100; i++) {
        if ((i % 5) == 0 && (i % 3) == 0) {
            console.log(caso1 + caso2);
        }
        else if ((i % 3) == 0) {
            console.log(caso1);
        }
        else if ((i % 5) == 0) {
            console.log(caso2);
        }
        else {
            console.log(i);
        }
    }
}
/**Ejercicio 2
 * Escribe un programa que reciba una lista de números y devuelva la suma de los 
números pares en la lista.
 */
function paresLista() {
    let numeros = [10, 22, 33, 47, 46, 32, 89, 105, 202, 84, 44, 66, 28];
    let sumaPares = 0;

    for (i = 0; i <= numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            console.log(numeros[i]);
            sumaPares += numeros[i];
        }
    }
    console.log(`Suma:  ${sumaPares}`);
}

/**Ejercicio 3
 * Escribe una función que determine si una cadena es un palíndromo.
 Un palíndromo es una cadena que se lee igual de izquierda a derecha que de 
 derecha a izquierda.Por ejemplo, "ana" es un palíndromo.
 */
function palindromo() {
    let palabra = document.getElementById("palabra").value.trim();
    let validarPalabra = document.getElementById("palabra").value.trim().split("");
    let bandera = true;


    for (i = 0; i <= validarPalabra.length / 2; i++) {
        if (validarPalabra[i] !== validarPalabra[validarPalabra.length - 1 - i]) {
            bandera = false;
            console.log(validarPalabra[i] + validarPalabra[validarPalabra.length - 1 - i]);
            break;
        } else {
            console.log(validarPalabra[i] + validarPalabra[validarPalabra.length - 1 - i]);
        }
    }

    if (!bandera) {
        console.log(`${palabra} no es un palindromo`);
    } else {
        console.log(`${palabra} es un palindromo`);
    }
}

/**Ejercicio 4
 * Escribe una función que encuentre el número más grande en una lista de números.
 */

function numMayor() {
    let lista = [-1, -24, -52];
    let mayor = lista[0];

    for (i = 1; i <= lista.length - 1; i++) {
        if (mayor <= lista[i]) {
            console.log('Mayor' + mayor);
            mayor = lista[i];
        }
        console.log('Numero: ' + lista[i]);
        console.log('Mayor: ' + mayor);
    }
    console.log(`El número mayor es: ${mayor}`);
}
/**Ejercicio 5
 * Escribe una función que determine si un número es primo o no.
 * Un número primo es un número natural mayor que 1 que solamente es divisible por 1 y 
 * por sí mismo, es decir, no tiene otros divisores propios
 */
function primos() {
    let numero = parseInt(document.getElementById("number").value);
    console.log(numero);
    if (numero > 0) {
        if ((numero / numero) == 1 && (numero / 1) == numero) {
            console.log(`${numero} es primo`)
        } else {
            console.log(`${numero} no es primo`)
        }
    } else {
        console.log(`${numero} no es natural por ende no es primo`)
    }
}

/**Ejercicio 6
 * Escribe un programa que imprima la secuencia de Fibonacci hasta el número dado por 
 * el usuario. La secuencia de Fibonacci es una serie de números en la que cada número 
 * es la suma de los dos números anteriores. La secuencia comienza con 0 y 1.
 */
function fibonacci() {
    let n = document.getElementById("final").value;
    let numero1 = 0;
    let numero2 = 1;

    while (numero1 <= n) {
        console.log(numero1 + 'numero 1');
        let temporal = numero1;
        numero1 = numero2;
        numero2 = temporal + numero1
    }
}

function fibonnacci2(numero) {
    let n = 2;
    let numero1 = 0;
    let numero2 = 1;

    for (let i = 0; i <= n - 1; i++) {
        console.log(numero1 + 'numero 1');
        let temporal = numero1;
        numero1 = numero2;
        numero2 = temporal + numero1
    }
}
fibonnacci2();
/**Ejercicio 7
 * Escribe una función que determine si una lista está ordenada de manera ascendente.
 */

/**Ejercicio 8
 * Escribe una función que determine si dos cadenas son anagramas. Dos cadenas son anagramas si tienen las mismas letras pero en un orden diferente. Por ejemplo, "roma" y "amor" son anagramas.
*/