// 延迟发出值，延迟时间由提供函数决定。



// RxJS v6+
import { interval, timer } from 'rxjs';
import { delayWhen } from 'rxjs/operators';

// 每1秒发出值
const message = interval(1000);
// 5秒后发出值
const delayForFiveSeconds = () => timer(5000);
// 5秒后，开始发出 interval 延迟的值
const delayWhenExample = message.pipe(delayWhen(delayForFiveSeconds));
// 延迟5秒后输出值
// 例如， 输出: 5s....1...2...3
const subscribe = delayWhenExample.subscribe(val => console.log(val));
