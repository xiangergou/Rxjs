// 只有当当前值与之前最后一个值不同时才将其发出。


//  distinctUntilChanged 默认使用 === 进行比较, 对象引用必须匹配！


import { from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

// 基于最新发出的值进行比较，只输出不同的值
const myArrayWithDuplicatesInARow = from([1, 1, 2, 2, 3, 1, 2, 3]);

const distinctSub = myArrayWithDuplicatesInARow
  .pipe(distinctUntilChanged())
  // 输出: 1,2,3,1,2,3
  .subscribe(val => console.log('DISTINCT SUB:', val));

const nonDistinctSub = myArrayWithDuplicatesInARow
  // 输出 : 1,1,2,2,3,1,2,3
  .subscribe(val => console.log('NON DISTINCT SUB:', val));
