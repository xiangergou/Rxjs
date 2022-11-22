// 当发生错误时，基于自定义的标准来重试 observable 序列。

// RxJS v6+
import { timer, interval } from 'rxjs';
import { map, tap, retryWhen, delayWhen } from 'rxjs/operators';

// 每1秒发出值
const source = interval(1000);
const example = source.pipe(
  map(val => {
    if (val > 5) {
      // 错误将由 retryWhen 接收
      throw val;
    }
    return val;
  }),
  retryWhen(errors =>
    errors.pipe(
      // 输出错误信息
      tap(val => console.log(`Value ${val} was too high!`)),
      // 5秒后重启
      delayWhen(val => timer(val * 1000))
    )
  )
);
/*
  输出:
  0
  1
  2
  3
  4
  5
  "Value 6 was too high!"
  --等待5秒后然后重复此过程
*/
const subscribe = example.subscribe(val => console.log(val));
