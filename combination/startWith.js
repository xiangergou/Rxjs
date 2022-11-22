

// 发出给定的第一个值
import { of, startWith } from 'rxjs';

// 发出 (1,2,3)
const source = of(1, 2, 3);
// 从0开始
const example = source.pipe(startWith(0));
// 输出: 0,1,2,3
const subscribe = example.subscribe(val => console.log(val));