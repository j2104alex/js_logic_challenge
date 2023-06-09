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
    let medianNumber = Math.round((arr.length - 1) / 2);

    //Ojo estudiar ordenar ascendentemente un arreglo
    arr.sort((a, b) => a - b);
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

/**Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
Function Description

Complete the timeConversion function in the editor below. It should return a new string
 representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in 12  hour format
Returns

string: the time in 24 hour format */
function timeConversion(s) {

    s = s.split(':');
    let hours = parseInt(s[0]);

    if (s[2].includes('PM')) {
        if (hours === 12) {
            s[2] = s[2].slice(0, 2);
        }
        else {
            hours += 12;
            s[2] = s[2].slice(0, 2);
        }
    }
    else if (s[2].includes('AM')) {
        if (hours === 12) {
            hours = 0;
            s[2] = s[2].slice(0, 2);
        }
        else {
            s[2] = s[2].slice(0, 2);
        }

    }

    s[0] = hours.toString().length === 1 ? '0' + hours.toString() : hours.toString();

    return s.join(':');
}


function repeatNumbers(arr) {
    let numbersNonRepeat = [];
    let AmountNumbersRepeat = [];
    let contador = 1;

    arr.sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i + 1]) === arr[i]) {
            contador++;
        }
        else {
            numbersNonRepeat.push(arr[i]);
            AmountNumbersRepeat.push(contador);
            contador = 1;
        }
    }
    console.log(numbersNonRepeat);
    console.log(AmountNumbersRepeat);
}

/* console.log(repeatNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1])); */

/**Given an array of integers, where all elements but one occur twice, 
 * find the unique element. */

function lonelyinteger(a) {
    let numberContainer = [];
    let amoutNumbers = [];
    let counter = 1;
    let uniqueNumbers = [];

    a.sort((a, b) => a - b);

    for (let i = 0; i < a.length; i++) {
        if (a[i + 1] === a[i]) {
            counter++;
        }
        else {
            numberContainer.push(a[i]);
            amoutNumbers.push(counter);
            counter = 1;
        }
    }

    for (let j = 0; j < amoutNumbers.length; j++) {
        if (amoutNumbers[j] === 1) {
            uniqueNumbers.push(numberContainer[j]);
        }
    }
    console.log(uniqueNumbers)
    return uniqueNumbers;

}

/**Frequence list
 * Alternative Sorting
Another sorting method, the counting sort, does not require comparison. Instead, you create 
an integer array whose index range covers the entire range of values in your array to sort. 
Each time a value occurs in the original array, you increment the counter at that index. 
At the end, run through your counting array, printing the value of each non-zero valued 
index that number of times. 0-99
 */

function countingSort(arr) {
    //Crear una variable de tipo arreglo de 100 valores inicializados en 0
    let frequence = new Array(100).fill(0);

    for (let i = 0; i < arr.length; i++) {
        frequence[arr[i]]++;
    }
    return frequence;
}


function flippingMatrix(matrix) {

    console.log('Matrix complete' + matrix);
    let n = matrix[0].length;
    let add = 0;

    for (let i = 0; i < (matrix.length) / 2; i++) {

        for (let j = 0; j < (matrix.length) / 2; j++) {
            add += Math.max(
                //EJEM primera iteracion
                matrix[i][j], //posicion actual 112
                matrix[n - 1 - i][j], //Espejo en columna 62
                matrix[i][n - 1 - j],//Espejo en fila 119
                matrix[n - 1 - i][n - 1 - j] //Espejo fila/columna
            );
        }
    }
    return add;
}


/* console.log(flippingMatrix([[112, 45, 83, 119], 
                            [56, 125, 56, 49], 
                            [15, 78, 101, 43], 
                            [62, 98, 114, 108]])); */

/**Two players are playing a game of Tower Breakers! Player  a
 * lways moves first, and both players always play optimally.The rules of 
 * the game are as follows:

Initially there are n  towers.
Each tower is of height m.
The players move in alternating turns.
In each turn, a player can choose a tower of height  and reduce its height to x , where  and  evenly divides y .
If the current player is unable to make a move, they lose the game.
Given the values of n and m, determine which player will win. If the first player wins, return 1. Otherwise, return 2. */

function towerBreakers(n, m) {

    if (m === 1) {
        return 2;
    }
    else if (n === 1 && m > 1) {
        return 1;
    }
    else if (n % 2 == 0 && m > 1) {
        return 2;
    }

    else if (n % 2 !== 0 && m % 1 == 0) {
        return 1;
    }
    else {
        return 2;
    }
}

/**
 * Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's 
 * cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, 
 * just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to 
 * z, a, b and c.
 */
function caesarCipher(s, k) {

    let rotationFactor = k;
    let clearText = s.split('');
    let encryptedText = [];
    console.log(rotationFactor, clearText);

    let alphabetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let alphabetUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    for (let i = 0; i < clearText.length; i++) {
        let character = clearText[i];
        console.log(character);

        if (alphabetLower.includes(character)) {
            let currPosition = alphabetLower.indexOf(character);
            let newPosition = (currPosition + rotationFactor) % alphabetLower.length
            encryptedText.push(alphabetLower[newPosition]);
        }
        else if (alphabetUpper.includes(character)) {
            let currPosition = alphabetUpper.indexOf(character);
            let newPosition = (currPosition + rotationFactor) % alphabetUpper.length

            encryptedText.push(alphabetUpper[newPosition]);
        }
        else {
            encryptedText.push(clearText[i]);
        }
    }
    encryptedText = encryptedText.join('');
    return encryptedText;

}


/* function palindromeIndex(s) {
    s = s.split('');
    console.log(s);
    let lengthS = s.length - 1;
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[lengthS - i]) {

            if (s[i + 1] == s[lengthS - i]) {

                if (s[i + 1] == s[lengthS - i - 2]) {
                    return lengthS - i;
                }
                return i;
            }
            else if (s[i] == s[lengthS - 1 - i]) {
                return lengthS - i;
            }
        }
    }
    return -1;
}
 */
/* console.log(palindromeIndex('hgygsvlfwcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcflvsgygh')); */


function palindromeIndex2(s) {

    s = s.split('');
    let optionA = [...s];
    let optionB = [...s];

    if (isPalindrome(s)) {
        return -1;
    }
    else {
        for (let i = 0; i < s.length / 2; i++) {

            if (s[i] !== s[s.length - 1 - i]) {
                optionA.splice(i, 1);
                optionB.splice(s.length - 1 - i, 1);

                if (isPalindrome(optionA)) {
                    return i;
                }
                if (isPalindrome(optionB)) {
                    return s.length - 1 - i;
                }
            }
        }
    }

}

/**Determinar la posicion i a eliminar para que el string sea un palindromo */
function isPalindrome(option) {

    for (let i = 0; i < option.length / 2; i++) {
        if (option[i] !== option[option.length - 1 - i]) {
            console.log('false: ' + option);
            return false;
        }
    }
    console.log('true: ' + option);
    return true;
}


/* console.log(palindromeIndex2('aaab')); */


/**iven a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending.
 * Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if 
 * they are not. 
 * Ordenar las filas de manera ascendente
 * Revisar si las columnas estan de manera ascendentes y retornar YES si esta ordenada la matriz en ambas maneras
 * NO si es el caso contrario*/
let temp = true;
function gridChallenge(grid) {
    console.log(grid);

    //oRDENAR LAS FILAS
    for (let i = 0; i < grid.length; i++) {
        grid[i] = grid[i].split('').sort();
    }

    if (colValidations(grid) && rowsValidation(grid)) {
        return 'YES'
    }
    else {
        return 'NO'
    }
}


function rowsValidation(grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length - 2; j++) {
            if (grid[i][j] > grid[i][j + 1]) {
                return false;
            }
        }
    }
    return true;
}

function colValidations(grid) {
    for (let i = 0; i < grid[0].length; i++) {

        for (let j = 0; j < grid.length - 1; j++) {

            if (grid[j][i] > grid[j + 1][i]) {
                return false;
            }
        }
    }
    return true;
}

function superDigit(n, k) {
    let resultado=n;
    if (n < 10) {
        return n;
    }
    if (k > 0) {
        resultado = multiplicarString(n, k);
    }
    resultado = resultado.split('');

    const numeros = resultado.map(elemento => parseInt(elemento))
                            .reduce((acumulador, numero) => acumulador + numero, 0);

    return superDigit(numeros.toString(), 0);
}

function multiplicarString(n, k) {
    let resultado = '';

    for (let i = 0; i < k; i++) {
        resultado += n;
    }

    return resultado;
}

console.log(superDigit('9875', 4));
