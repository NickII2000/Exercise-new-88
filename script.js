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

const arr = [4, 5, 1, 3, 2, 6];
//___________4  9 10 13 15 21
const res = arr.reduce((sum, current) => sum + current);
console.log(res);

const arr2 = ['apple', 'pear', 'plum'];
const res2 = arr2.reduce((sum, current) => `${sum}, ${current}`);
console.log(res2);

const arr3 = [4, 5, 1, 3, 2, 6];
//____________7 12 13 16 18 24
const res3 = arr3.reduce((sum, current) => sum + current, 3); // 3 - второй аргумент, начальное значение sum
console.log(res3);