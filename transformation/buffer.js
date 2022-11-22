// 收集输出值，直到提供的 observable 发出才将收集到的值作为数组发出。


// RxJS v6+
import { interval, fromEvent } from 'rxjs';
import { buffer } from 'rxjs/operators';

// 创建每1秒发出值的 observable
const myInterval = interval(1000);
// 创建页面点击事件的 observable
const bufferBy = fromEvent(document, 'click');
/*
  收集由 myInterval 发出的所有值，直到我们点击页面。此时 bufferBy 会发出值以完成缓存。
  将自上次缓冲以来收集的所有值传递给数组。
*/
const myBufferedInterval = myInterval.pipe(buffer(bufferBy));
// 打印值到控制台
// 例如 输出: [1,2,3] ... [4,5,6,7,8]
const subscribe = myBufferedInterval.subscribe(val =>
  console.log(' Buffered Values:', val)
);
