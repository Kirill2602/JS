'use strict';
//Обязательное задание №1.1
//Закоменчен в es5
console.log('############# Задание№1 #############');
// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }
//
// Product.prototype.make25PercentDiscount = function () {
//     console.log('Цена ' + (product1.name) + ' с учетом 25% скидки составляет ' + (this.price - this.price / 100 * 25) + ' рублей');
// }
// let product1 = new Product('Товар 1', 1000);
// let product2 = new Product('Товар 2', 25001);
// product1.make25PercentDiscount();
// product2.make25PercentDiscount();

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        console.log('Цена ' + (this.name) + ' с учетом 25% скидки составляет ' + (this.price - this.price / 100 * 25) + ' рублей');
    }
}

let product1 = new Product('Товар 1', 1000);
let product2 = new Product('Товар 2', 25001);
product1.make25PercentDiscount();
product2.make25PercentDiscount();

//Обязательное задание №1.2
//Не уверен, что правильно присвоил свойству highlighted значение false (может быть это стоило сделать иначе)

//Закоменчен es5
console.log('############# Задание№2 #############');

// function Post (author, text, date){
//     this.author = author;
//     this.text = text;
//     this.date = date;
// }
// Post.prototype.edit = function (text){
//     console.log(text);
// }
// function AttachedPost (author, text, date, highlighted){
//     Post.call(this, author, text, date);
//     this.highlighted = highlighted;
//     highlighted = false;
// }
// AttachedPost.prototype = Object.create(Post.prototype);
// AttachedPost.prototype.constructor = AttachedPost;
//
// AttachedPost.prototype.makeTextHighlighted = function (){
//     let highlighted = true;
//     console.log(highlighted);
// }
//
// let attPost = new AttachedPost('Автор', 'Текст', Date.now(), false);
// attPost.makeTextHighlighted();
// attPost.edit('Какой-то текст');

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        console.log(text);
    }
}

class AttachedPost extends Post {
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        let highlighted = true;
        console.log(highlighted);
    }
}

let date = new Date();
let post = new Post('Еще один автор', 'Еще один текст', date);
post.edit('другой текст');
console.log('Автор: ' + (post.author) + ',' + ' Текст: ' + (post.text) + ',' + ' Дата: ' + post.date);


let attPost = new AttachedPost('Автор', 'Текст', date, false);
attPost.makeTextHighlighted();
attPost.edit('Какой-то текст');
console.log('Автор: ' + (attPost.author) + ',' + ' Текст: ' + (attPost.text) + ',' + ' Дата: ' + attPost.date + ',' + attPost.highlighted);

//Задание № 1
function less4() {
    let userNumber = prompt('Введите число от 0 до 999');
    let userArrNumber = userNumber.split('');
    let numObj = {};
    while (userArrNumber.length < 3) {
        userArrNumber.unshift(0);
    }
    if (userArrNumber.length > 3) {
        alert('Вы ввели слишком длинное число');
        return null;

    } else {
        numObj['сотни '] = userArrNumber[0];
        numObj['десятки '] = userArrNumber[1];
        numObj['единицы '] = userArrNumber[2];
        console.log(numObj);
    }
}

less4();





