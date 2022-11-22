// 给定持续时间后，再按照指定间隔时间依次发出数字。



import { timer, of } from 'rxjs';

// 1秒后发出0，然后结束，因为没有提供第二个参数
const source = timer(1000);
// 输出: 0
source.subscribe(val => console.log(val));
