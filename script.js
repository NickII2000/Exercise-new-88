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

