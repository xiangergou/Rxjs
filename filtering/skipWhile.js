// 跳过源 observable 发出的值，直到提供的表达式结果为 false 。


// RxJS v6+
import { interval } from 'rxjs';
import { skipWhile } from 'rxjs/operators';

// 每1秒发出值
const source = interval(1000);
// 当源 observable 发出的值小于5的时候，则跳过该值
const example = source.pipe(skipWhile(val => val < 5));
// 输出: 5...6...7...8........
const subscribe = example.subscribe(val => console.log(val));
