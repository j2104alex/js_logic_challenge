/**Ejercicio 1
* Escribe un programa que imprima los números hasta el numero dado. 
* Pero para los múltiplos de tres imprime "Fizz" en lugar del número y para los 
* múltiplos de cinco imprime "Buzz". Para los números que son múltiplos de ambos 
* tres y cinco, imprime "FizzBuzz"
* .*/
function fizzBuzz(n) {
    let result = '';

    for (let i = 1; i <= n; i++) {
        if (i % 5 == 0 && i % 3 == 0) {
            result += 'FizzBuzz ';
        }
        else if (i % 5 == 0) {
            result += 'Buzz ';
        }
        else if (i % 3 == 0) {
            result += 'Fizz ';
        }
        else {
            result += i + ' '
        }
    }
    return result;
}
/* console.log(fizzBuzz(15)); */


/**Ejercicio 2
 * Escribe un programa que reciba una lista de números y un arreglo con los 
números pares en la lista.
 */
function peersArray(array) {

    let peersNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            peersNumbers.push(array[i]);
        }
    }
    return peersNumbers;
}

/*console.log(peersArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); */


/**Ejercicio 3
 * Escribe un programa que reciba una lista de números y devuelva la suma de los 
números pares en la lista.
 */

function addPeerNumber(array) {
    let result = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            result += array[i];
        }
    }
    return result;
}

/* console.log(addPeerNumber([1, 2, 3, 4, 5, 6])); */

/**Ejercicio 3
 * Escribe una función que determine si una cadena es un palíndromo.
 Un palíndromo es una cadena que se lee igual de izquierda a derecha que de 
 derecha a izquierda.Por ejemplo, "ana" es un palíndromo.
 */

function palindromo(string) {

    let palabra = string.trim().split('');

    for (let i = 0; i <= (palabra.length - 1 / 2); i++) {
        if (palabra[i] !== palabra[palabra.length - 1 - i]) {
            return string + ' No es palindromo';
        }
        return string + ' Es palindromo';
    }
}
/* console.log(palindromo('amor')); */

/**Ejercicio 4
 * Escribe una función que encuentre el número más grande en una lista de números.
 */

function biggestNumber(numbers) {

    let bigger = numbers[0];

    for (let i = 1; i < numbers[numbers.length - 1]; i++) {
        if (numbers[i] >= bigger) {
            bigger = numbers[i];
        }
    }
    return bigger;
}
/* console.log(biggestNumber([1, -20, 4, 10, 5, 100,-500,1000])); */

/**Ejercicio 5
 * Escribe una función que determine si un número es primo o no.
 * Un número primo es un número natural mayor que 1 que solamente es divisible por 1 y 
 * por sí mismo, es decir, no tiene otros divisores propios
 */

function primo(number) {
    if (number <= 1) {
        return number + ' No es primo'
    }
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return number + ' No es primo';
        }
    }
    return number + ' Es primo';
}

/* console.log(primo(6)); */

/**Ejercicio 6
 * Escribe un programa que imprima la secuencia de Fibonacci hasta el número dado por 
 * el usuario. La secuencia de Fibonacci es una serie de números en la que cada número 
 * es la suma de los dos números anteriores. La secuencia comienza con 0 y 1.
 */
/* function fibonacci(number) {
    let n1 = 0;
    let n2 = 1;
    let sequence = [n1, n2];

    if (number<=2){
        return sequence.slice(0,number);
    }

    for (let i = 2; i < number; i++) {
        let nextNumber =n1+n2;
        sequence.push(nextNumber);
        n1 = n2
        n2 = nextNumber;
    }
    return sequence;
}

console.log(fibonacci(10));*/


function restock(itemCount, target) {

    let addItems = 0;

    for (let item of itemCount) {
        addItems += item;
        if (addItems >= target) {
            return addItems - target;
        }
        console.log(item, addItems, target);
    }
    return addItems - target;

}
/* console.log(restock([2, 2, 4], 10)); */

//REVISAR
function bananas(string) {
    arrayString = string.split('');

    let counter = 0;

    for (let single of arrayString) {
        if (single === '(') {
            counter++;
        }
        else if (single == ')') {
            counter--;
        }
    }
    if (counter < 0) {
        counter *= -1;
    }

    return counter;
}
/* console.log(bananas('()(()())))((')); */

function minimunCostProyects(numberProyects, idProyects, costProyects) {
    let arrayId = [];
    let minimumCostProyects = [];

    for (let id of idProyects) {
        if (!arrayId.includes(id)) {
            arrayId.push(id);
        }
    }
    if (arrayId.length !== numberProyects) {
        return -1;
    }
    for (let i = 0; i < numberProyects; i++) {
        minimumCostProyects[i] = Infinity;
    }

    for (let i = 0; i < costProyects.length; i++) {
        let currentValue = costProyects[i];
        let currentProyect = idProyects[i];

        if (currentValue < minimumCostProyects[currentProyect]) {
            minimumCostProyects[currentProyect] = currentValue;
        }
    }

    let total = 0;
    for (let i = 0; i < minimumCostProyects.length; i++) {
        total += minimumCostProyects[i];
    }
    return minimumCostProyects, total;
}
/* console.log(minimunCostProyects(3, [0, 1, 0, 1, 2], [10, 7, 5, 2, 1])); */


/**Print the following  lines, each to  decimals:

proportion of positive values
proportion of negative values
proportion of zeros */
function plusMinus(arr) {
    let lengthArr = arr.length;
    let positive = 0, negative = 0, zero = 0;

    for (let number of arr) {
        if (number < 0) {
            negative++;
        }
        else if (number > 0) {
            positive++;
        }
        else {
            zero++
        }
    }
    positive = (positive / lengthArr).toFixed(5);
    negative = (negative / lengthArr).toFixed(5);
    zero = (zero / lengthArr).toFixed(5);

    console.log(positive);
    console.log(negative);
    console.log(zero);

}

/* console.log(plusMinus([-4, 3, -9, 0, 4, 1])); */


/**Given five positive integers, find the minimum and maximum values that can be
 *  calculated by summing exactly four of the five integers. Then print the respective 
 * minimum and maximum values as a single line of two space-separated long integers. */
function miniMaxSum(arr) {

    let add = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            add += arr[i];

        }
    }

    let maxNum = add - Math.min(...arr);
    let minNum = add - Math.max(...arr);

    console.log(minNum + ' ' + maxNum);

}

/* console.log(miniMaxSum([5, 6, 1, 0, 0])); */

/**Dado un arreglo encontrar el valor de la media, tener en cuenta que se debe organizar
 * el arreglo de manera ascendente primero
 */
function findMedian(arr) {
    let medianNumber= Math.round((arr.length-1)/2);
    
    //Ojo estudiar ordenar ascendentemente un arreglo
    arr.sort((a,b)=>a-b);
    /**Asi seria con el metodo burbuja en caso que no dejen usar un metodo de js
     * for (let i = 0; i < arr.length - 1; i++) {

    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
     */

    return arr[medianNumber];

}