
// 如果完成时所有的值都能通过断言，那么发出 true，否则发出 false 。


import { of, every } from 'rxjs';

// 发出5个值
const source = of(1, 2, 3, 4, 5);
const example = source.pipe(
  // 每个值都是偶数吗？
  every(val => val % 2 === 0)
);
// 输出: false
const subscribe = example.subscribe(val => console.log(val));
