'use strict';

//filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter(name => {
    return name.length < 5;
});

console.log(shortNames);

//map

const answers = ['IvAn', 'AnnA', 'Hello'];

// const result = answers.map(item => {
//     return item.toLowerCase();
// });

const result = answers.map(item => item.toLowerCase());

console.log(result);

//every/some

const some = [4, 'ddf', 'fkfk'];

//проверяем есть ли у нас хоть одно число

// console.log(some.some(item => typeof(item) === 'number'));

console.log(some.every(item => typeof (item) === 'number'));


//reduce

const arr = [4, 5, 1, 3, 2, 6];

const res = arr.reduce((sum, current) => sum + current, 3);


// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);