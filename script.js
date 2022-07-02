'use strict';

// filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldevart', 'Nick', 'Svetlana'];

const shortNames = names.filter(function (name) {
    return name.length < 5;
});
console.log(shortNames);

const shortNames2 = names.filter(name => name.length >= 5);
console.log(shortNames2);

// map

let answers = ['IvAn', 'AnnA', 'HeLLO'];

const result = answers.map(item => item.toLowerCase());
console.log(result);

answers = answers.map(item => item.toLowerCase()); // не рекомендуется
console.log(answers);

// every/some

const arrForSomeOrEvery = [4, 'qwq', 'sfreferf'];
console.log(arrForSomeOrEvery.some(item => typeof (item) === 'number'));
console.log(arrForSomeOrEvery.every(item => typeof (item) === 'number'));

const arrForSomeOrEvery2 = [4, 1000, 777];
console.log(arrForSomeOrEvery2.some(item => typeof (item) === 'number'));
console.log(arrForSomeOrEvery2.every(item => typeof (item) === 'number'));

// reduce

const arr = [4, 5, 1, 3, 2, 6, 7, 8, 9,];
//___________4  9 10 13 15 21 28 36 45
const res = arr.reduce((sum, current) => sum + current);
console.log(res);

const arr2 = ['apple', 'pear', 'plum'];
const res2 = arr2.reduce((sum, current) => `${sum}, ${current}`);
console.log(res2);

const arr3 = [4, 5, 1, 3, 2, 6];
//____________7 12 13 16 18 24
const res3 = arr3.reduce((sum, current) => sum + current, 30); // 3 - второй аргумент, начальное значение sum
console.log(res3);

const arr4 = ['apple', 'pear', 'plum'];
const res4 = arr4.reduce((sum, current) => `${sum}, ${current}`, 'kiwi');
console.log(res4);

// object => array

const obj = {
    ivan: 'person',
    ann: 'person',
    nick: 'person',
    dog: 'animal',
    cat: 'animal',
};
const newArr = Object.entries(obj)
    .filter(item => item[1] === 'person')
    .map(item => item[0]);
console.log(newArr);

// ---- Exercise #88

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter(item => item.rating >= 8);
}
console.log(showGoodFilms(films));


function showListOfFilms(arr) {
    return arr.reduce((sum, current) => `${sum}, ${current.name}`, '').substring(2);
}
console.log(showListOfFilms(films));

function setFilmsIds(arr) {
    return arr.map((item, i) => {
        item = item;
        item.id = i;
        return item;
    });
}
console.log(setFilmsIds(films));

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    return arr.some((item) => item.hasOwnProperty('id'));
}
console.log(checkFilms(films));