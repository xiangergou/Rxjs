import { interval, timer } from 'rxjs';
import { skipUntil } from 'rxjs/operators';

// 每1秒发出值
const source = interval(1000);
// 跳过源 observable 发出的值，直到内部 observable 发出值 (6s后)
const example = source.pipe(skipUntil(timer(6000)));
// 输出: 5...6...7...8........
example.subscribe(val => console.log(val));
