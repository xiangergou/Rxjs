
// 以 openings 发出为起始，以 closingSelector 发出为结束，收集并发出源 observable 中的值的 observable 。

// RxJS v6+
import { timer, interval } from 'rxjs';
import { tap, windowToggle, mergeAll } from 'rxjs/operators';

// 立即发出值，然后每秒发出值
const source = timer(0, 1000);
// 每5秒开关窗口
const toggle = interval(5000);
const example = source.pipe(
  // 每5秒开启窗口
  windowToggle(toggle, val => interval(val * 1000)),
  tap(_ => console.log('NEW WINDOW!'))
);

const subscribeTwo = example
  .pipe(
    // 窗口发出嵌套的 observable
    mergeAll()
    /*
      输出:
      "NEW WINDOW!"
      5
      "NEW WINDOW!"
      10
      11
      "NEW WINDOW!"
      15
      16
      "NEW WINDOW!"
      20
      21
      22
    */
  )
  .subscribe(val => console.log(val));
