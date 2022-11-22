


// 返回基础的 observable
const sample = val => Rx.Observable.of(val).delay(5000);
// 将基础的 observable 转换成 promise
const example = sample('First Example')
  .toPromise()
  // 输出: 'First Example'
  .then(result => {
    console.log('From Promise:', result);
  });
