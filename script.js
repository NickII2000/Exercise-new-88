'use strict';

// filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldevart', 'Nick', 'Svetlana'];

const shortNames = names.filter(function (name) {
    return name.length < 5;
});

console.log(shortNames);

const shortNames2 = names.filter(name => name.length >= 5);

console.log(shortNames2);