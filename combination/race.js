// 使用首先发出值的 observable


// RxJS v6+
import { delay, map } from 'rxjs/operators';
import { of, race } from 'rxjs';

// 抛出错误并忽略其他的 observables 。
const first = of('first').pipe(
  delay(100),
  map(_ => {
    throw 'error';
  })
);
const second = of('second').pipe(delay(200));
const third = of('third').pipe(delay(300));
// nothing logged
race(first, second, third).subscribe(val => console.log(val));
