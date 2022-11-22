
// 收集 observables，当前一个完成时订阅下一个。


// 当源 observable 发出的速度要比内部 observables 完成更快时，请小心 backpressure (背压) ！

// 在很多情况下，你可以使用只使用单个操作符 concatMap 来替代！

// concatMap === map + concatAll

import { map, concatAll } from 'rxjs/operators';
import { of, interval } from 'rxjs';

// 每2秒发出值
const source = interval(2000);
const example = source.pipe(
  // 为了演示，增加10并作为 observable 返回
  map(val => of(val + 10)),
  // 合并内部 observables 的值
  concatAll()
);
// 输出: 'Example with Basic Observable 10', 'Example with Basic Observable 11'...
const subscribe = example.subscribe(val =>
  console.log('Example with Basic Observable:', val)
);