// Функція getOrderQuantity(order) приймає один параметр order - масив рядків, які описують продукти в замовленні клієнта.
// Доповни код функції таким чином, щоб вона повертала число, що дорівнює кількості елементів масиву.

// function getOrderQuantity(order) {
//     const summary = order.length;
//     console.log(summary);
    
// }
// getOrderQuantity(["apple", "peach", "pear", "banana"]); //повертає 4
// getOrderQuantity(["apple", "banana"]);                  //повертає 2
// getOrderQuantity(["apple", "banana", "pear"]);          //повертає 3
// getOrderQuantity([]);                                   //повертає 0
//======================================================================================================
// Функція getLastElementMeta(array) приймає один параметр array - масив довільних значень.
// Доповни код функції таким чином, щоб вона повертала новий масив з двох елементів:

// function getLastElementMeta(array) {
//     const lengthArray = array.length - 1;
//     const indexArray = array[lengthArray];
//     return [lengthArray, indexArray];
// }
// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"])); //повертає [3, "banana"]
// console.log(getLastElementMeta(["apple", "peach", "pear"]));           //повертає [2, "pear"]
// console.log(getLastElementMeta(["apple", "peach"]));                   //повертає [1, "peach"]
// console.log(getLastElementMeta(["apple"]));                            //повертає [0, "apple"]
//========================================================================================================
// Виклик getExtremeElements([1, 2, 3, 4, 5]) повертає [1, 5]
// Виклик getExtremeElements(["Earth", "Mars", "Venus"]) повертає ["Earth", "Venus"]
// Виклик getExtremeElements(["apple", "peach", "pear", "banana"]) повертає["apple", "banana"]

// function getExtremeElements(array) {
//     const firstElement = array[0];
//     const lastIndex = array.length - 1;
//     const lastElement = array[lastIndex];
//     return [firstElement, lastElement];
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));                         //повертає [1, 5]
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));              //повертає ["Earth", "Venus"]
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));    //повертає["apple", "banana"]
//========================================================================================================
// Функція calculateTotalPrice(order)приймає один параметр order— масив чисел.
// Завершіть функцію так, щоб вона повертала загальну суму елементів у orderмасиві.
// function calculateTotalPrice(order) {
//     let total = 0;
//     for (let i = 0; i < order.length; i++) {
//         total += order[i];
//     }
//     return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));         // 138
// console.log(calculateTotalPrice([164, 48, 291]));          // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116
//==========================================================================================================
// Функція getEvenNumbers(start, end)має два параметри startі end, які є цілими числами.
// Доповніть код функції так, щоб вона повертала масив усіх парних чисел від startдо end.
// Якщо парних чисел немає, масив має бути порожнім.Парне число — це число, яке ділиться на 2без залишку(10 % 2 === 0).
// Використовуйте forпетлю.

// function getEvenNumbers(start, end) {
//     const evenNumbers = [];
//     for (let i = start; i <= end; i++) {
//         if (i % 2 === 0) {
//             evenNumbers.push(i);
//         }
//     }
//     return evenNumbers;
// }
// console.log(getEvenNumbers(2, 5));   // [2, 4]
// console.log(getEvenNumbers(3, 11));  // [4, 6, 8, 10]
// console.log(getEvenNumbers(6, 12));  // [6, 8, 10, 12]
// console.log(getEvenNumbers(8, 8));   // [8]
// console.log(getEvenNumbers(7, 7));   // []
// console.log(getEvenNumbers(1, 10));  // [2, 4, 6, 8, 10]
//==============================================================================================================
// Створіть порожній масив для зберігання нового масиву.
// Використовуйте forцикл для повторення кожного елемента в array1.
// Усередині циклу перевірте, чи існує поточний елемент за array2допомогою includesметоду.
// Якщо він існує, додайте елемент до нового масиву.
// Повертає заповнений масив загальних елементів як результат функції.

// function getCommonElements(array1, array2) {
//     const commonElements = [];
//     for (let i = 0; i < array1.length; i++) {
//         if (array2.includes(array1[i])) {
//             commonElements.push(array1[i]);
//         }
//     }
//     return commonElements;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));                     // [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));             // [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));   // [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));               // []
//================================================================================================================
// Змініть код функції calculateTotalPrice(order)так, щоб вона повертала загальну суму чисел у orderмасиві.
// Використовуйте for...ofцикл для ітерації по масиву.

// function calculateTotalPrice(order) {
//     let total = 0;
//     for (const item of order) {
//         total += item;
//     }
//     return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));         // 138
// console.log(calculateTotalPrice([164, 48, 291]));          // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116
// console.log(calculateTotalPrice([]));                      // 0  
//=================================================================================================================