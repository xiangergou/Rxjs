// RxJS v6+
import { interval, zip, from } from 'rxjs';
import { sample } from 'rxjs/operators';

const source = zip(
  // 发出 'Joe', 'Frank' and 'Bob' in sequence
  from(['Joe', 'Frank', 'Bob']),
  // 每2秒发出值
  interval(2000)
);
// 每2.5秒对源 observable 最新发出的值进行取样
const example = source.pipe(sample(interval(2500)));
// 输出: ["Joe", 0]...["Frank", 1]...........
const subscribe = example.subscribe(val => console.log(val));
