

// 当前一个 observable 完成时订阅提供的 observable 并发出值。

// RxJS v6+
import { of, interval } from 'rxjs';
import { concatMapTo, delay, take } from 'rxjs/operators';

// 每2秒发出值
const sampleInterval = interval(500).pipe(take(5));
const fakeRequest = of('Network request complete').pipe(delay(3000));
// 前一个完成才会订阅下一个
const example = sampleInterval.pipe(concatMapTo(fakeRequest));
// 结果
// 输出: Network request complete...3s...Network request complete'
const subscribe = example.subscribe(val => console.log(val));
