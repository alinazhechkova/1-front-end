
// Первая задача
let num;
do {
    num = prompt('Введите число');
} while (Number.isNaN(+num) || num === undefined || num === null)
let string = '';
for (let i = 0; i < num; i++) {
    string = string + '#';
    console.log(string)
}

// Подсчитать сумму всех чисел в заданном пользователем диапазоне.

let startDiap;
let endDiap;
do {
    startDiap = prompt('Начало диапазона');
    endDiap = prompt('Конец диапазона');
} while (Number.isNaN(+startDiap) || startDiap === undefined || startDiap === null || Number.isNaN(+endDiap) || endDiap === undefined || endDiap === null);

let sum = 0;
while(startDiap <= endDiap) {
    sum = sum + startDiap++;
}
console.log(sum);

//    Запросить у пользователя число и вывести все делители этого числа.
let number;
do {
    number = prompt('Введите число');
} while (Number.isNaN(+number) || number === undefined || number === null)
let i = 0;
let delitel;
while (i++ < number) {
    if (number % i === 0) console.log(i);
}


// Запросить 2 числа и найти только наибольший общий делитель

let firstNum;
let secondNum;
do {
    firstNum = prompt('Первое число');
    secondNum = prompt('Второе число');
} while (Number.isNaN(+firstNum) || firstNum === undefined || firstNum === null || Number.isNaN(+secondNum) || secondNum === undefined || secondNum === null)

i = 0;
let minNumber = firstNum < secondNum ? firstNum : secondNum;
let maxNumber = firstNum > secondNum ? firstNum : secondNum;
let maxDelitel = 0;
while (i++ < minNumber) {
    if (maxNumber % minNumber === 0) {
        maxDelitel = minNumber;
        break;
    }
    if (firstNum % i === 0 && secondNum % i === 0) maxDelitel = i;
}
console.log(maxDelitel);

// Определить количество цифр в введенном числе.
let num1;
do {
    num1 = prompt('Введите число');
} while (Number.isNaN(+num1) || num1 === undefined || num1 === null)
i = 1;
let r = Math.floor(num1 / 10);
while (r > 0) {
    i++;
    r = Math.floor(r / 10);
}
let resultNumAmout = `В данном числе ${i} цифр`
console.log(resultNumAmout);


// Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей .При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран.

let tenNum;
let res;
i = 0;
let p = 0;
let k = 0;
let j = 0;
let b = 0;
let l = 0;
while(i++ < 10) {
    tenNum = +prompt('Введите число');
    if (tenNum < 0) {
        p++;
    }  else if (tenNum > 0) {
        k++;
    } else {
        j++;
    }
    if (tenNum % 2 === 0) {
        b++;
    } else  if ( tenNum % 2 !== 0 ){
        l++;   
     }
} 
res = 'Отрицательных чисел: ' + p + '; \n' + 'Положительных чисел: ' + k + '; \n' + 'Нулей: ' + j + '; \n' + 'Четных чисел: ' + b + '; \n' + 'Нечетных чисел: ' + l + '.';
console.log(res);

// Зациклить калькулятор.Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример.И так до тех пор, пока пользователь не откажется.
let calc1;
let calc2;
let sign;
let question;
let resCalc = 'Ваш результат: ';
do {
    calc1 = +prompt('Введите первое число');
    sign = prompt('Введите знак');
    calc2 = +prompt('Введите второе число');
    if (sign == '+') resCalc += calc1 + calc2;
    if (sign == '-') resCalc += calc1 - calc2;
    if (sign == '*') resCalc += calc1 * calc2;
    if (sign == '/') resCalc += calc1 / calc2;    
    alert (resCalc);
    question = confirm('Хотите ли решить еще один пример?');
} while (question == true);


// Запросить у пользователя число и на сколько цифр его сдвинуть.Сдвинуть цифры числа и вывести результат(если число 123456 сдвинуть на 2 цифры, то получится 345612).
let num3;
let numChange;
do {
    num3 = prompt('Введите число');
    numChange = prompt('На сколько цифр сдвинуть?');
} while (Number.isNaN(+num3) || num3 === undefined || num3 === null || Number.isNaN(+numChange) || numChange === undefined || numChange === null)
let long = 1;
let amountRegist = Math.floor(num3 / 10);
let numLast = 0;
while (amountRegist > 0) {
    long++;
    amountRegist = Math.floor(amountRegist / 10);
}

for (let i = 0; i < numChange; i++) {
    numLast = num3;
    for (let j = 0; j < long - 1; j++) {
        numLast = Math.floor(numLast / 10);
    }
    num3 = num3 % Math.pow(10, long-1)*10 + numLast; 
}
console.log(num3)


// Зациклить вывод дней недели таким образом: «День недели.Хотите увидеть следующий день ? »и так до тех пор, пока пользователь нажимает OK. 
let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let confirmQue;
i = 0;
let result;
do {
    result = days[i++];
    alert(result);
    confirmQue = confirm('Хотите увидеть следующий день?');
    if (i > 7) {
        i = 0;
        i++;
        result = days[i++];
        alert(result);
        confirmQue = confirm('Хотите увидеть следующий день?');
    }
} while (confirmQue == true);

// Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
let multiply = '';
for (let i = 2; i < 10; i++) {
    for (let k = 1; k < 11; k++) {
        multiply += `${i} умножить на ${k} = ` + i * k + '\n';
    }
}
console.log(multiply);

// Последнее задание не сделала пока что, если сделаю, добавлю в следующие дз))))))
