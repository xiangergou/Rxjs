//以某个时间间隔为阈值，在 durationSelector 完成前将抑制新值的发出


// RxJS v6+
import { interval } from 'rxjs';
import { throttle } from 'rxjs/operators';

// 每1秒发出值
const source = interval(1000);
// 节流2秒后才发出最新值
const example = source.pipe(throttle(val => interval(2000)));
// 输出: 0...3...6...9
const subscribe = example.subscribe(val => console.log(val));
