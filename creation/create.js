
// 使用给定的订阅函数来创建 observable


// RxJS v6+
import { Observable } from 'rxjs';
/*
  创建在订阅函数中发出 'Hello' 和 'World' 的 observable 。
*/
const hello = Observable.create(function(observer) {
  observer.next('Hello');
  observer.next('World');
});

// 输出: 'Hello'...'World'
const subscribe = hello.subscribe(val => console.log(val));
