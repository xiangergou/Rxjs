// 发出值，直到提供的 observable 发出值，它便完成



// 取值直到 timer 发出
import { interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// 每1秒发出值
const source = interval(1000);
// 5秒后发出值
const timer$ = timer(5000);
// 当5秒后 timer 发出值时， source 则完成
const example = source.pipe(takeUntil(timer$));
// 输出: 0,1,2,3
const subscribe = example.subscribe(val => console.log(val));
