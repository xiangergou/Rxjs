// 依次发出给定区间内的数字。


import { range } from 'rxjs';

// 依次发出1-10
const source = range(1, 10);
// 输出: 1,2,3,4,5,6,7,8,9,10
source.subscribe(val => console.log(val));
