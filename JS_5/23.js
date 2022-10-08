/** ЗАДАЧА 23 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [];
cars[0] = {
   carBrand: "BMW",
   price: 1000000,
   isAvailableForSale: true
};
cars[1] = {
   carBrand: "Audi",
   price: 1200000,
   isAvailableForSale: true
};
cars[2] = {
   carBrand: "Ferrari",
   price: 1600000,
   isAvailableForSale: true
};

cars.push({
   carBrand: "Bugatti",
   price: 1200000,
   isAvailableForSale: true
});

cars.forEach(car=>console.log(car));





