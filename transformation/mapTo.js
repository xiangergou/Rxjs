// 将每个发出值映射成常量。


// RxJS v6+
import { interval } from 'rxjs';
import { mapTo } from 'rxjs/operators';

// 每2秒发出值
const source = interval(2000);
// 将所有发出值映射成同一个值
const example = source.pipe(mapTo('HELLO WORLD!'));
// 输出: 'HELLO WORLD!'...'HELLO WORLD!'...'HELLO WORLD!'...
const subscribe = example.subscribe(val => console.log(val));
