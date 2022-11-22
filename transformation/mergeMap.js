// 映射成 observable 并发出值。
// RxJS v6+
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

// 发出 'Hello'
const source = of('Hello');
// 映射成 observable 并将其打平
const example = source.pipe(mergeMap(val => of(`${val} World!`)));
// 输出: 'Hello World!'
const subscribe = example.subscribe(val => console.log(val));
