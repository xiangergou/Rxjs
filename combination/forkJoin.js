// 当所有 observables 完成时，发出每个 observable 的最新值。


// 当有一组 observables，但你只关心每个 observable 最后发出的值时，此操作符是最适合的。此操作符的一个常见用例是在页面加载(或其他事件)时你希望发起多个请求，并在所有请求都响应后再采取行动。它可能与 Promise.all 的使用方式类似。

// RxJS v6+
import { delay, take } from 'rxjs/operators';
import { forkJoin, of, interval } from 'rxjs';

const myPromise = val =>
  new Promise(resolve =>
    setTimeout(() => resolve(`Promise Resolved: ${val}`), 5000)
  );

/*
  当所有 observables 完成时，将每个 observable 
  的最新值作为数组发出
*/
const example = forkJoin(
  // 立即发出 'Hello'
  of('Hello'),
  // 1秒后发出 'World'
  of('World').pipe(delay(1000)),
  // 1秒后发出0
  interval(1000).pipe(take(5)),
  // 以1秒的时间间隔发出0和1
  interval(1000).pipe(take(5)),
  // 5秒后解析 'Promise Resolved' 的 promise
  myPromise('RESULT')
);
//输出: ["Hello", "World", 0, 1, "Promise Resolved: RESULT"]
const subscribe = example.subscribe(val => console.log(val));
