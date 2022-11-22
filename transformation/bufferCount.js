// 收集发出的值，直到收集完提供的数量的值才将其作为数组发出。



// RxJS v6+
import { interval } from 'rxjs';
import { bufferCount } from 'rxjs/operators';

// 创建每1秒发出值的 observable
const source = interval(1000);
// 在发出3个值后，将缓冲的值作为数组传递
const bufferThree = source.pipe(bufferCount(3));
// 打印值到控制台
// 输出: [0,1,2]...[3,4,5]
const subscribe = bufferThree.subscribe(val =>
  console.log('Buffered Values:', val)
);
