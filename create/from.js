
// 将数组、promise 或迭代器转换成 observable

//  对于数组和迭代器，所有包含的值都会被作为序列发出！

// 此操作符也可以用来将字符串作为字符的序列发出！




import { from } from 'rxjs';

// 将数组作为值的序列发出
const arraySource = from([1, 2, 3, 4, 5]);
// 输出: 1,2,3,4,5
arraySource.subscribe(val => console.log(val));


// 发出 promise 的结果
const promiseSource = from(new Promise(resolve => resolve('Hello World!')));
// 输出: 'Hello World'
promiseSource.subscribe(val => console.log(val));


// 使用 js 的集合
const map = new Map();
map.set(1, 'Hi');
map.set(2, 'Bye');

const mapSource = from(map);
// 输出: [1, 'Hi'], [2, 'Bye']
mapSource.subscribe(val => console.log(val));

// 将字符串作为字符序列发出
const source = from('Hello World');
// 输出: 'H','e','l','l','o',' ','W','o','r','l','d'
source.subscribe(val => console.log(val));