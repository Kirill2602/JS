'use strict';

//Задание №1

console.log('############ Задание №1 #################');


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i = 0; i <= arr.length; i++){
    if(i == 0){
        console.log(i + ' - это ноль');
    } else if (i % 2 == 0){
        console.log(i + ' - это четное число');
    } else {
        console.log(i + ' - это не четное число');
    }
}

//Задание №2

console.log('############ Задание №2 #################');


const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);


//Задание №3

console.log('############ Задание №3 #################');

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
products.forEach(function (disc){
   console.log('Стоимость товара с id: ' + (disc.id) + ' с учетом 15% скидки составляет ' +  (disc.price - disc.price / 100 * 15) + ' рублей');
});

//Задание №4

console.log('############ Задание №4 #################');

const prod = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
]
const photoArr = prod.filter(function (photoValue){
    if (photoValue.photos !== undefined && photoValue.photos.length > 0){
        return photoValue.photos;
    }
});
console.log(photoArr);

let min_max = prod.sort(function (a, b){
    return a.price - b.price;
});
console.log(min_max);


//Задание №5

console.log('############ Задание №5 #################');

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let d = 0; d <= array.length; console.log(d++)){

}

//Задание №6

console.log('############ Задание №6 #################');

let x = [];

for (let l = 0; l < 20; l++){
    x.push('x');
    console.log(x.join(''));
}




