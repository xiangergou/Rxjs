// 根据提供的表达式，在源 observable 完成时发出它的最后一个值。

import { from, last } from 'rxjs';

const source = from([1, 2, 3, 4, 5]);
// 没有参数则发出最后一个值
const example = source.pipe(last());
// 输出: "Last value: 5"
example.subscribe(val => console.log(`Last value: ${val}`));