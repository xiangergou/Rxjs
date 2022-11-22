// 在完成前发出N个值(N由参数决定)。

import { of } from 'rxjs';
import { take } from 'rxjs/operators';

// 发出 1,2,3,4,5
const source = of(1, 2, 3, 4, 5);
// 取第一个发出的值然后完成
const example = source.pipe(take(1));
// 输出: 1
const subscribe = example.subscribe(val => console.log(val));
