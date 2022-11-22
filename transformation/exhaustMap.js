
// 映射成内部 observable，忽略其他值直到该 observable 完成。

// RxJS v6+
import { interval, merge, of } from 'rxjs';
import { delay, take, exhaustMap } from 'rxjs/operators';

const sourceInterval = interval(1000);
const delayedInterval = sourceInterval.pipe(delay(10), take(4));

const exhaustSub = merge(
  // 延迟10毫秒，然后开始 interval 并发出4个值
  delayedInterval,
  // 立即发出
  of(true)
)
  .pipe(exhaustMap(_ => sourceInterval.pipe(take(5))))
  /*
   *  第一个发出的值 (of(true)) 会被映射成每秒发出值、 
   *  5秒后完成的 interval observable 。
   *  因为 delayedInterval 的发送是晚于前者的，虽然 observable 
   *  仍然是活动的，但它们会被忽略。
   *
   *  与类似的操作符进行下对比:
   *  concatMap 会进行排队
   *  switchMap 会在每次发送时切换成新的内部 observable
   *  mergeMap 会为每个发出值维护新的 subscription
   */
  // 输出: 0, 1, 2, 3, 4
  .subscribe(val => console.log(val));
