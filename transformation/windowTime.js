

// 在每个提供的时间跨度内，收集源 obsercvable 中的值的 observable 。

// RxJS v6+
import { timer } from 'rxjs';
import { windowTime, tap, mergeAll } from 'rxjs/operators';

// 立即发出值，然后每秒发出值
const source = timer(0, 1000);
const example = source.pipe(
  // 每3秒开启一个新窗口
  windowTime(3000),
  tap(_ => console.log('NEW WINDOW!'))
);

const subscribeTwo = example
  .pipe(
    // 窗口发出嵌套的 observable
    mergeAll()
    /*
      输出:
      "NEW WINDOW!"
      0
      1
      2
      "NEW WINDOW!"
      3
      4
      5
    */
  )
  .subscribe(val => console.log(val));
