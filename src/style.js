'use strict'

























































// const originalArray = [10, 2, 33, 1, 33, 4, 9, 22, 10];

// function arrayTransformation (originalData) {
//
//     function findUnique(data) {
//         const result = [];
//
//         for (let str of data) {
//             if (!result.includes(str))
//         result.push(str);
//       }
//
//         return result;
//     }
//
//     const uniqueArray = findUnique(originalData)
//         .sort( (a, b) => a - b)
// return uniqueArray;
// }
//
// console.log(arrayTransformation(originalArray));

// const originalArray = [10, 2, 33, 1, 33, 4, 9, 22, 10];
//
// function arrayTransformation (originalData) {
//
//     const sortArray = originalData.sort( (a, b) => a - b);
//
//     const newArray = [];
//
//     sortArray.reduce((previous, next) =>{
//
//         // (previous === next) ? newArray.push(previous) : next;
//
//         if ( previous === next ) newArray.push(next)
//         else return next;
//     },0)
//
//     return newArray;
// }

// console.log( arrayTransformation(originalArray) );


const originalArray = [10, 2, 33, 1, 33, 4, 9, 22, 10];

function arrayTransformation (originalData) {

    const sortArray = originalData.sort( (a, b) => a - b);

   sortArray.reduce((previous, next) =>{

        if ( previous === next ) sortArray.splice(sortArray.indexOf(next,0),1)
        else return next;
    },0)

    return sortArray;
}

console.log( arrayTransformation(originalArray) )















// 1 - Написать функцию, которая получает на вход параметром массив чисел
// пример: [10, 2, 33, 1, 33, 4, 9, 22, 10] -> [1, 2, 4, 9, 10, 22, 33]
// 2 - Функция которая определяет, является ли слово "полиндромом"


//     1 - Написать скрипт для суммирования чисел в массиве
// Прим. есть массив чисел
// const numbers = [10, 25, 100];
// На выходе должны получить переменную, в которой будет содержаться сумма этих чисел (135), скрипт должен игнорировал другие типы данных.
//
// 2 - Создать массив объектов для юзеров.
//     Прим. [{name: ‘Ivan’, age: 18}, {name: ‘Petr’, age: 12}, {name: ‘Sidor’, age: 25}, {...}, ...]
// На выходе отдавать два массива. Первый с совершеннолетними пользователями, второй с несовершеннолетними.
//
// 3 - Создать массив объектов, data = [{ firstName: 'Ashton', lastName: 'Kutcher', age: 40}, ... ]; ( от 5 и более значений ).
// Выведем окно prompt, в которое необходимо будет ввести фамилию пользователя; Написать инструкцию поиска по массиву data, с введенными в prompt данными;
// Если есть совпадение - вывести все данные этого пользователя в altert, если совпадения не произошло вывести alert с ошибкой:  “No results found for your request”
// Поиск производится без учета регистра.
//
// 4 - Есть исходный массив строк ['a', 'b', 'c'], данные могут повторятся, нужно собрать объект, у которого свойства будут состоять из строк, а значения этих свойств будет количество повторений в массиве.
//     Пример: ['a', 'b', 'c', 'a', 'v', 'v', 'v'] => { a: 2, b: 1, c: 1, v: 3}