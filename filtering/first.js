// 发出第一个值或第一个通过给定表达式的值。


import { from } from 'rxjs';
import { first } from 'rxjs/operators';

const source = from([1, 2, 3, 4, 5]);
// 没有参数则发出第一个值
const example = source.pipe(first());
// 输出: "First value: 1"
example.subscribe(val => console.log(`First value: ${val}`));
