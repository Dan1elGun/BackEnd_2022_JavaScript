/** ЗАДАЧА 21 - Добавление элементов в начало массива
 *
 * 1. Добавьте элементы а начало массива:
 *  - сначала строку "Привет"
 *  - потом число 100
 *
 * 2. Выведите длину результирующего массива в консоль
 */

const myArray = [true, null]

// Напишите код здесь
myArray.unshift("Hello");
myArray.unshift(100);

console.log(myArray) // [100, "Hello", true, null]