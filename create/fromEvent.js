



// RxJS v6+
import { fromEvent, map } from 'rxjs';

// 创建发出点击事件的 observable
const source = fromEvent(document, 'click');
// 映射成给定的事件时间戳
const example = source.pipe(map(event => `Event time: ${event.timeStamp}`));
 example.subscribe(val => console.log(val));
