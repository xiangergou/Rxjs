
// 随着时间的推移进行归并。
// RxJS v6+
import { of } from 'rxjs';
import { scan } from 'rxjs/operators';

const source = of(1, 2, 3);
// 基础的 scan 示例，从0开始，随着时间的推移计算总数
const example = source.pipe(scan((acc, curr) => acc + curr, 0));
// 输出累加值
// 输出: 1,3,6
const subscribe = example.subscribe(val => console.log(val));
