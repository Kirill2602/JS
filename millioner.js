'use strict';

/* Начал делать, но изнчально не пошел по примеру из доп видео (потом уже понял, что сделал не так)
* Не реализовал повторный запуск игры (этот момент закоменчен в нижней части скрипта)
* Не реализовал момент с остановкой игры (если пользователю вдруг перехотелось продолжать) */

alert('Вас приветствует игра "Кто хочет стать миллионером?!!!"');
alert('Выберете правильный вариант ответа!');
let count = 0;
let questions = [
    {
        question: 'Не огонь, А жжется?',
        answers: [
            {answer: 'a. булка', type: 'a', right: false},
            {answer: 'b. крапива', type: 'b', right: true},
            {answer: 'c. собака', type: 'c', right: false},
            {answer: 'd. стол', type: 'd', right: false},
        ],
    },
    {
        question: 'Зимой и летом одним цветом?',
        answers: [
            {answer: 'a. елка', type: 'a', right: true},
            {answer: 'b. кот', type: 'b', right: false},
            {answer: 'c. белка', type: 'c', right: false},
            {answer: 'd. стул', type: 'd', right: false},
        ],
    },

    {
        question: 'Хожу в пушистой шубе, Живу в густом лесу. В дупле на старом дубе. Орешки я грызу',
        answers: [
            {answer: 'a. елка', type: 'a', right: false},
            {answer: 'b. медведь', type: 'b', right: false},
            {answer: 'c. белка', type: 'c', right: true},
            {answer: 'd. дятел', type: 'd', right: false},
        ],
    },

    {
        question: 'Красна девица, Сидит в темнице,А коса на улице.',
        answers: [
            {answer: 'a. морковка', type: 'a', right: true},
            {answer: 'b. огурец', type: 'b', right: false},
            {answer: 'c. баклажан', type: 'c', right: false},
            {answer: 'd. курица', type: 'd', right: false},
        ],
    },

    {
        question: 'Круглое, румяное, я расту на ветке; Любят меня взрослые и маленькие детки',
        answers: [
            {answer: 'a. палка', type: 'a', right: false},
            {answer: 'b. апельсин', type: 'b', right: false},
            {answer: 'c. арбуз', type: 'c', right: false},
            {answer: 'd. яблоко', type: 'd', right: true},
        ],
    },
];
let userAnswer;
questions.forEach((q) => {
    userAnswer = prompt(
        'Вопрос: ' + q.question + '\n' + 'Варианты ответов: ' + '\n' + q.answers.map((a) => a.answer),
    );
    const checkAnswer = q.answers.find((ans) => ans.type === userAnswer)?.right;
    if (checkAnswer) {
        alert('Поздравляю!!!' + '\n' + ' Это верный ответ!!!');
        count++;
    } else {
        alert('Это не правильный ответ!');
    }
});
alert('Количество правильных ответов: ' + count);

let askRestart = prompt('Хотите попробовать еще раз?');

// if (askRestart.toLowerCase() === 'да'){
//     //дергать фунцию(которой нет), которая запускает игру
// } else {
//     alert('Игра окончена!');
// }




