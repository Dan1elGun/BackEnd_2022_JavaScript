/** ЗАДАЧА 52 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

class ExtendedArray extends Array {
    constructor(...arr){
        super(...arr)
    }
    sum() {
        let sum = 0
        for(let i in this) {
            sum += this[i]
        }
        return sum
    }
    onlyNumbers() {
        const num = []
        for(let i in this) {
            if(typeof(this[i]) == "number") {num.push(this[i])} else {continue}
        }
        return num
    }
}

const arr1 = new ExtendedArray(1,2,3,"sdf")
const arr2 = new ExtendedArray(4,5,"ghj",6)
const arr3 = new ExtendedArray(7,"kla",8,9)
console.log(arr1.sum())
console.log(arr2.sum())
console.log(arr3.sum())
console.log(arr1.onlyNumbers())
console.log(arr2.onlyNumbers())
console.log(arr3.onlyNumbers())
const doubles = arr1.onlyNumbers().map((num) => num * 2);
console.log(doubles)
arr1.forEach(element => console.log(element));


