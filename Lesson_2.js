"use strict";
// Задание №1
/* 1. ++a(инкремент) изначально увеличивает значение переменной a на 1.
 2. затем записывается в значение переменной c.
  alert выводит сообщение со значением переменной c. */

let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2

/* 1. значально в значение переменной d аписывается значение переменной b (но равно 1)
*  2. И только после этого значение b увеличивается на 1
*  3. alert выводит сообщение со значением переменной d*/

d = b++;
alert(d); //ответ: 1


/* 1. Переменная a изначально ровна 2.
*  2. ++a увеличивает a на единицу (получается 3).
*  3. Далее происходит сложение результатом которого получаем значение 5,
* которое записывается в переменную c
* 4. alert выводит сообщение созначением переменной c*/

c = 2 + ++a;
alert(c); //ответ: 5

/* 1. 2 + b = 3
*  2. Далее значение увеличивается на 1
*  3. Значение 4 записывается в переменную d
*  4. alert выводит значение переменной d
*  5. alert выводит значение переменной а = 3 (после действий в примере 3 )
*  6. alert выводит значение переменной b = 3 ( после действий в примере 4) */

d = 2 + b++;
alert(d); //ответ: 4
alert(a); //3
alert(b); //3

// Задание №2

/* 1. Переменной а присваивается значение 2
*  2. Выполняется действие в скобках результатом является 4
*  3. Происходит сложение 1 со значением переменной а = 4
*  4. Переменной х присваивается результат сложения равный 5
   5. Переменная y равна 4 после выполненных действий в скобках */
let y = 2;
let x = 1 + (y *= 2);
console.log(y);
console.log(x);

// Задание №3

let n = +prompt('Введите первое число');
let q = +prompt('Введите второе число');

let difference = n - q;
let multiplication = n * q;
let sum = n + q;

if (n >= 0 && q >= 0) {
    console.log(difference);
} else if (n < 0 && q < 0) {
    console.log(multiplication);
} else if (n >= 0 && q < 0 || n < 0 && q >= 0) {
    console.log(sum);
} else if (isNaN(n) || isNaN(q)) {
    alert('Введите число!');
}

// Задание №4

//Сложение
function sumF(num1, num2) {
    return num1 + num2;
}

console.log(sumF(5, 5));

//Вычитание
function differ(num1, num2) {
    return num1 - num2;
}

console.log(differ(10, 5));

//Умножение
function multi(num1, num2) {
    return num1 * num2;
}

console.log(multi(2, 5));

//Деление

function splitting(num1, num2) {
    return num1 / num2;
}

console.log(splitting(2, 5));


// Задание 5

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case  '*':
            return multi(arg1, arg2);
        case '/':
            return splitting(arg1, arg2);
        case '+':
            return sumF(arg1, arg2);
        case '-':
            return differ(arg1, arg2);
        default :
            console.log('Такой операции нет');
    }
}
console.log(mathOperation(10, 10, '*'));
console.log(mathOperation(10, 10, '/'));
console.log(mathOperation(10, 10, '+'));
console.log(mathOperation(10, 10, '-'));
console.log(mathOperation(10, 10, '%'));

//Задание №6
/* Наделал костылей */

//Запрашиваем сумму у пользователя и записываем ее в переменную
let deposit = prompt('Введите сумму, которую хотите перевести на счет');

//Определяем номер последнего символа
let lastSymbolNumb = deposit.length - 1;

//Определяем номер предпоследнего символа
let previousSymbolNumb = deposit.length - 2;

//Определяем предпоследний символ и записываем его в переменную
let previousSymbolValue = deposit.charAt(previousSymbolNumb);

//Определяем последний символ и записываем его в переменную
let lastSymbolValue = deposit.charAt(lastSymbolNumb);

//Соединяем предпоследний и последний символы ( получаем последние 2 цифры )
let lastTwoSymbols = previousSymbolValue + lastSymbolValue;

if (lastSymbolValue === '1' && deposit.length <= 2 && deposit !== '11') {
    alert('На ваш счет зачисленно ' + deposit + ' рубль');

} else if (lastTwoSymbols >= '12' && lastTwoSymbols <= '20') {
    alert('На ваш счет зачисленно ' + deposit + ' рублей');

} else if (lastSymbolValue === '2' || lastSymbolValue === '3' || lastSymbolValue === '4') {
    alert('На ваш счет зачисленно ' + deposit + ' рубля');

} else {
    alert('На ваш счет зачисленно ' + deposit + ' рублей');
}










