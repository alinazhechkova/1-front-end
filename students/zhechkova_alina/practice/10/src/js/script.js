/* const typeNumber = (2);

const typeString = ("ff", 'ff', `ff`);

let typeUndefined;
console.log(typeUndefined);

let typeNull = null;

let typeBool = false;
typeBool = true;

const arr = [];

const obj = {};

// const a = b = c = 2;

console.log(2 === 2);

let n = 0;
console.log(n++);

if (n === 1) {

} else {

}

const number = +prompt ('Введите число');
const checkN = number % 2;
let messageCheck = null;

if (checkN === 0) {
    messageCheck= 'Четное число';
} else {
    messageCheck = 'Нечетное число';
}
console.log(messageCheck);

const number2 = +prompt ('Введите число');
let messageCheck2 = null;

if (number2 > 0) {
    messageCheck2 = 'Положительное число';
} else if (number2 < 0) {
    messageCheck2 = 'Отрицательное число';
} else {
    messageCheck2 = 'Ноль';
}

console.log(messageCheck2);

// 1)   Запросить у пользователя его возраст и проверить корректность введенных данных (0–120 лет).

const userAge = +prompt ('Введите свой возраст');
const userCorrect = 2021 - userAge;
let messageCorrectAge = null;

if (userCorrect >= 0 && userCorrect <= 120) {
    messageCorrectAge = 'Корректные данные';
}
else if (Number.isNaN(userAge)) {
        messageCorrectAge = 'Вы ввели не число';
    } 
else {
    messageCorrectAge = 'Некорректные данные';
}
console.log(messageCorrectAge);


const password = +prompt ('Введите пароль ');
let passwordTrue = null;

if (password === 123 || password === 321 || password === 456) {
    passwordTrue = 'Доступ есть';
} else {
    passwordTrue = 'В доступе отказано';
}
console.log(passwordTrue);

// Запросить у пользователя время (часы, минуты, секунды) и проверить корректность введенных данных.

const hour = +prompt ('Введите час');
const min = +prompt ('Введите минуты');
const sec = +prompt ('Введите секунды');
let messageTimeCorrect = null;

if (hour < 24 && hour >= 0 && min >= 0 && min < 60 && sec < 60  && sec >= 0) {
    messageTimeCorrect = 'Корректно';
} else {
    messageTimeCorrect = 'Некорректно';
}
console.log(messageTimeCorrect);


switch (+prompt('Pass:')) {
    case 321:
    case 456: 
    case 123:
        console.log('Yes');
        break;
    
    default:
        console.log('End');
}

// Запросить у пользователя номер месяца и вывести на экран его название.

const monthNum = +prompt('Введите номер месяца');
let monthName;

switch (monthNum) {
    case 1:
        monthName = 'Январь';
        break;
    case 2:
        monthName = 'Февраль';
        break;
    case 3:
        monthName = 'Март';
        break;
    case 4:
        monthName = 'Апрель';
        break;
    case 5:
        monthName = 'Май';
        break;
    case 6:
        monthName = 'Июнь';
        break;
    case 7:
        monthName = 'Июль';
        break;
    case 8:
        monthName = 'Апрель';
        break;
    case 9:
        monthName = 'Сентябрь';
        break;
    case 10:
        monthName = 'Октябрь';
        break;
    case 11:
        monthName = 'Ноябрь';
        break;
    case 12:
        monthName = 'Декабрь';
        break;
    default:
        monthName ='none';
}
console.log(monthName);

*/

const age = 50;

const rez = (age > 65) ? "Пора на пенсию" : "Нужно еще поработать"

const number = +prompt('Введите число');
const ncheck = number % 2;
const message = (ncheck === 0) ? "Четное" : "Нечетное";
console.log(message);

const num1 = +prompt("Введите число");
const num2 = +prompt("Введите второе число");
const messageNum = (num1 > num2) ? num1 : num2;
console.log(messageNum);

