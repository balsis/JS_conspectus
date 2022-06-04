// 1. Переменные

// 1.1. Типы переменных

// let - может менять значение во время работа программы
let userName = 'Марк';
console.log(userName);
userName = 'Егор';
console.log(userName);

// const - не может менять значение на протяжении работы программы 
// при объявлении константы сразу присваивается значение!
const yearOfBirth = 1990;
const p = 3.14;

// var - старый формат объявления переменной
// может менять значение на протяжении работы программы 

// 1.2. Типы данных

 let userName2 = 'Марк'; // 1.2.1.строка (текст)
 
 let age = 30; // 1.2.2. число

 let isMarried = true; //1.2.3. логическое значение true/false

 // Динамическая типизация

 let age2 = '30'; // строка 
 age2 = 30; // число
 age2 = true; // boolean

// 1.2.4.значение null - ничего, пусто 
let age3 = 32; 
age3 = null;  // обнуление переменной.

//1.2.5.undefined - значение не было присвоено. Если переменная объявлена, но значение ей не присвоено

let userName3; // Undefined
console.log(userName3);
 // 1.2.6. Объекты
 // 1.2.7. Массивы 

// Оператор typeof

console.log(typeof userName);

//1.2.8. BigInt
//1.2.9. Symbol - уникальное примитивное значение.

// 2. Операторы сравнения и условия
/* 
>, <, >=, <=
== нестрогое сравнение
=== строгое равенство
!= нестрогое неравенство
!== строгое неравенство
*/

let result = 10 >5 ;
console.log(result); 

// Динамическое приведение типов

console.log('5' == 5); //true
console.log('5' === 5); // false

// Условия
/*
if (условие) {
код, если условие верно    
} else {
код, если условие неверно    
}
*/

const time = 17;

if (time < 12) {
    console.log('Доброе утро');
} else if (time >=12 && time < 18) {
    console.log('Добрый день');
} else {
    console.log('Добрый вечер');
}

// Логические операторы 
/*
&& - логическое И
|| - логическое ИЛИ
!true - логическое НЕ
*/

// 3. Тернарный оператор
// (условие) ? (условие верно) : (условие неверно);

(14<12) ? console.log('Условие верно') : console.log('Условие неверно');

// 1 вариант //
let greeting;
let time2=15
if (time2 < 12) {
    greeting = 'Доброе утро2';
} else {
    greeting = 'Добрый день2';
}
console.log(greeting);

// тернарный //
let greeting2 = time2 < 12 ? 'Доброе утро3' : 'Добрый день3';
console.log(greeting2);

// 4. Конкатенация строк

let greeting3 = 'Привет! ';
let how = 'Как твои дела?';
let Say = greeting3+how
console.log (Say)

const userNamee= 'Марк';
console.log('Привет,'+ userNamee + '! Как твои дела?');

// Шаблонные строки
console.log(`Привет, ${userNamee}! How are you? `); // бэктикс обратные кавычки


// 5. Функции
// DRY - don't repeat yourself 

//function declaration
function SayHi() {
    console.log('Привет, уважаемый пользователь'); // можно вызвать до объявления
}
SayHi();

//function expression

let sayhi = function() {
    console.log('Привет, уважаемый пользователь');
}

// 5.1 Параметры и аргументы для функции
//name4 - параметр
function SayHi3(name4) {  
    console.log(`Привет, ${name4} Как твои дела?`);
}
SayHi3('Artur');
SayHi3('James');

// 5.2 return - возврат значения

function summ(a,b) {
    const result = a + b;
    return result;
}

let res = summ(10,15);
console.log (res);

// 5.3. Функция как аргумент

function summ2(a,b) {
    return a + b;
}
console.log(summ2(15,15));

//
const result2 = summ2(summ2(15,15),summ2(10,10));
console.log(result2); 

// 5.4 Самовызывающаяся функция

(function SayHi4 () {
    console.log('Привет')
})()