let arr = ["Ford", "Toyota", "Mercedes-Benz"]

for (let elem of arr) {
    console.log(elem)
}

console.log(Object.entries(arr))
console.log(arr.at(-1)) // Отримання елементу в кінці масиву

let obj = arr.pop() // Отримання останнього елементу масиву та видалення
console.log(obj, arr.length) // Mercedes-Benz, 2

arr.push("Nissan") // Додання елементу в кінець
console.log(arr) 

let firstObj = arr.shift()
console.log(firstObj, arr) // Отримання першого елементу з колекції та його видалення

arr.unshift("BMW") // Додання елементу на початок колекції
console.log(arr)

/*
Створіть масив styles з елементами “Jazz” та “Blues”.
Додайте “Rock-n-Roll” в кінець масиву.
Замініть значення в середині масиву на “Classics”. Ваш код для пошуку медіанного елемента має працювати для будь-яких масивів непарної довжини.
Видаліть перший елемент масиву та покажіть його.
Вставте Rap та Reggae на початок масиву.
 */

let styles = ["Jazz", "Blues"]
styles.push("Rock-n-Roll"); console.log(styles)
styles[(styles.length - 1) / 2] = "Classics"; console.log(styles)
console.log(styles.shift(), styles)
for (let elem of ["Reggae", "Rap"]) {
    styles.unshift(elem)
}; console.log(styles)

/**
Напишіть функцію sumInput() яка:

Просить користувача ввести дані за допомогою prompt та зберігає їх в масив.
Закінчує робити запити в користувача після того, як введено не числове значення, порожня строка або натиснуто “відмінити”.
Підраховує та повертає суму елементів масиву.
P.S. Нуль 0 це – валідне число, будь ласка, не зупиняйте функцію при введені 0. 
*/

let numArr = []

function sumInput(arr) {
    let askedNum = Number(prompt("Введіть число"))
    if (askedNum !== NaN) {
        console.log(typeof askedNum)
    }
    alert(arr.reduce((acc, elem) => acc + elem))
}

document.getElementById('arrayStart').addEventListener('click', () => {
    sumInput(numArr)
})

let salaries = {
    "Іван": 100,
    "Петро": 300,
    "Марія": 250
}

function sumSalaries(salaries) {
    if (Object.keys(salaries).length === 0) return 0
    else return Object.values(salaries).reduce((acc, item) => acc + item, 0)
}

console.log(sumSalaries(salaries))

let user = {
    name: 'Іван',
    age: 30
};

function count(obj) {
    return Object.entries(obj).length
}

console.log(count(user))