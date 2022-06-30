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

// не рекомендуется:
answers = answers.map(item => item.toLowerCase());
console.log(answers);

// every/some

const arrForSome = [4, 'qwq', 'sfreferf'];
console.log(arrForSome.some(item => typeof (item) === 'number'));