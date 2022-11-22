
// 创建由 promise 转换而来的 observable，并发出 promise 的结果。

// 打平类操作符可以接收 promises 而不需要 observable 包装！

// 你还可以使用 from 达到同样的效果！

import { mergeMap, catchError, of, Observable } from 'rxjs';

// 基于输入来决定是 resolve 还是 reject 的示例 promise
const myPromise = willReject => {
  return new Promise((resolve, reject) => {
    if (willReject) {
      reject('Rejected!');
    }
    resolve('Resolved!');
  });
};
// 先发出 true，然后是 false
const source = of(true, false);
const example = source.pipe(
  mergeMap(val =>
    Observable.fromPromise(myPromise(val)).pipe(
      // 捕获并优雅地处理 reject 的结果
      catchError(error => of(`Error: ${error}`))
    )
  )
);
// 输出: 'Error: Rejected!', 'Resolved!'
const subscribe = example.subscribe(val => console.log(val));
