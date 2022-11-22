
// 如果在完成前没有发出任何通知，那么发出给定的值



// RxJS v6+
import { defaultIfEmpty } from 'rxjs/operators';
import { of } from 'rxjs';

// 当源 observable 为空时，发出 'Observable.of() Empty!'，否则发出源的任意值
const exampleOne = of().pipe(defaultIfEmpty('Observable.of() Empty!'));
// 输出: 'Observable.of() Empty!'
const subscribe = exampleOne.subscribe(val => console.log(val));
