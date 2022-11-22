// 收集发出的值，直到经过了提供的时间才将其作为数组发出


// RxJS v6+
import { interval } from 'rxjs';
import { bufferTime } from 'rxjs/operators';

// 创建每500毫秒发出值的 observable
const source = interval(500);
// 2秒后，将缓冲值作为数组发出
const example = source.pipe(bufferTime(2000));
// 打印值到控制台
// 输出: [0,1,2]...[3,4,5,6]
const subscribe = example.subscribe(val =>
  console.log('Buffered with Time:', val)
);
