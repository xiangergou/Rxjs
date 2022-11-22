import { take, map, combineAll } from 'rxjs/operators';
import { interval } from 'rxjs';

// 每秒发出值，并只取前2个
const source = interval(1000).pipe(take(2));
// 将 source 发出的每个值映射成取前5个值的 interval observable
const example = source.pipe(
  map(val => interval(1000).pipe(map(i => `Result (${val}): ${i}`), take(5)))
);
/*
  soure 中的2个值会被映射成2个(内部的) interval observables，
  这2个内部 observables 每秒使用 combineLatest 策略来 combineAll，
  每当任意一个内部 observable 发出值，就会发出每个内部 observable 的最新值。
*/
const combined = example.pipe(combineAll());
/*
  输出:
  ["Result (0): 0", "Result (1): 0"]
  ["Result (0): 1", "Result (1): 0"]
  ["Result (0): 1", "Result (1): 1"]
  ["Result (0): 2", "Result (1): 1"]
  ["Result (0): 2", "Result (1): 2"]
  ["Result (0): 3", "Result (1): 2"]
  ["Result (0): 3", "Result (1): 3"]
  ["Result (0): 4", "Result (1): 3"]
  ["Result (0): 4", "Result (1): 4"]
*/
combined.subscribe(val => console.log(val));

// 在调用combineAll时，内部Observable(source执行map时返回的)会等待外部Obserevable完成，这里当source发出值0, 1后，开始执行内部Observable。由于外部发出了2个值，所以会得到一个长度为2的数组，当val值为0时并执行完take后我们得到[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]这样一个结果，然后val值为1时，得到[1,0], [1,1], [1,2], [1,3], [1,4]。然后对两次获得的结果执行combineLatest。