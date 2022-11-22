// 根据一个选择器函数，舍弃掉在两次输出之间小于指定时间的发出值。


import { of, timer, debounce } from 'rxjs';

// 发出四个字符串
const example = of('WAIT', 'ONE', 'SECOND', 'Last will display');
/*
  只有在最后一次发送后再经过一秒钟，才会发出值，并抛弃在此之前的所有其他值
*/
const debouncedExample = example.pipe(debounce(() => timer(1000)));
/*
    在这个示例中，所有的值都将被忽略，除了最后一个
    输出: 'Last will display'
*/
const subscribe = debouncedExample.subscribe(val => console.log(val));
