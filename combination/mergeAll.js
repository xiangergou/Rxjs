// 收集并订阅所有的 observables 




// ?????????????????????????????????????

import { take, map, delay, mergeAll } from 'rxjs/operators';
import { interval } from 'rxjs';

const source = interval(500).pipe(take(5));

/*
  interval 每0.5秒发出一个值。这个值会被映射成延迟1秒的 interval 。mergeAll 操作符接收一个可选参数
  以决定在同一时间有多少个内部 observables 可以被订阅。其余的 observables 会先暂存以等待订阅。
*/
const example = source
  .pipe(
    map(val =>
      source.pipe(
        delay(1000),
        take(3)
      )
    ),
    mergeAll(2)
  )
  .subscribe(val => console.log(val));
/*
  一旦操作符发出了所有值，则 subscription 完成。
*/
