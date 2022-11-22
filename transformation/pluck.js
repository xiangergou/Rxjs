
// 选择属性来发出。
// RxJS v6+
import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';

const source = from([{ name: 'Joe', age: 30 }, { name: 'Sarah', age: 35 }]);
// 提取 name 属性
const example = source.pipe(pluck('name'));
// 输出: "Joe", "Sarah"
const subscribe = example.subscribe(val => console.log(val));
