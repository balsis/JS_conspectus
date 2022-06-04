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
// в настоящее время редко используется
(function SayHi4 () {
    console.log('Привет')
})();


(function (a,b) {
    console.log (a+b);
})(10,15);

let summm=(function (a,b) {
   return a+b;
})(11,12);

console.log (summm);

//5.5 Стрелочная функция

const arrSayhi = (name5) => {
    console.log (`Привет, ${name5}`);
}
arrSayhi('Artur');


// 6. Массивы

const autobrands = ['Audi','BMW','Mazda','Toyota'];
    console.log (autobrands);
    console.log (autobrands[0]);
    console.log (autobrands[3]);
    console.log (autobrands.length);

// 6.1 Методы массивов
/*
array.push(item) - Добавить элемент в конец массива;
array.unshift() - Добавить элемент в начало массива
array.pop() - удалить элемент из конца массива;
array.shift() - удалить элемент из начала массива
array.splice([start])
*/

autobrands.push('Nissan');
    console.log (autobrands);

    autobrands.splice(2,1);
    console.log (autobrands);   

// 7. Циклы
console.log('start');
for (let i = 0; i < 5; i++) {
    console.log(i);
} 
console.log('finish');

console.log('start');
for (let i = 1; i < 10; i=i+5) {
    console.log(i);
} 
console.log('finish');
console.log('//////');
// 7.1. Обход массива циклом for

const autobrands_2 = ['Audi','BMW','Mazda','Toyota'];

for (i=0;i<autobrands_2.length;i++){
    console.log(autobrands_2[i]);
}
console.log('//////');
// 7.2. Обход массива циклом for (of)
// общепринятое наименование при обходе - item
for (let item of autobrands_2) {
    console.log(item);
}
console.log('//////');
// 7.3. Обход массива циклом forEach()

autobrands_2.forEach(function(item, index){
    console.log(`${item} ===>> ${index}`);
})

console.log('//////');

// 8 Объекты

var summation = function (num) {
    for (i=0;i<=num;i++) {
      let summation=i++  
      console.log(summation);    
    }
  }