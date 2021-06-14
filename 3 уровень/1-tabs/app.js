'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/
let txt = document.querySelector('.text');
let navColection = document.querySelectorAll('.nav-link');
let actives = document.getElementsByClassName('active');
navColection.forEach(function (i) {
    i.addEventListener('click', clickHandler);
});

/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event 
 */
function clickHandler(event) {
    // здесь вызывайте changeText и changeActiveClass, и передавайте
    // им объект события.
    changeText(event);
    changeActiveClass(event);
}

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event 
 */
function changeActiveClass(event) {
    for (let i = 0; navColection.length > i; i++) {
        navColection[i].onclick = function() {
            let currentActive = actives[0];
            if (currentActive)
                currentActive.classList.remove("active");

            if (currentActive !== this)
                this.classList.add("active");
        };
    }
}

/**
 * Эта фукнция должна читать текст (например через textContent) из 
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event 
 */
function changeText(event) {

    let content = event.target.textContent;

    if (content === 'Link 1'){
        txt.textContent = texts.text1;

    } else if (content === 'Link 2'){
        txt.textContent = texts.text2;
    } else if (content === 'Link 3') {
        txt.textContent = texts.text3;
    }

}