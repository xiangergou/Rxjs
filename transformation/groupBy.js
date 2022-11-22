// 基于提供的值分组成多个 observables


// RxJS v6+
import { from } from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';

const people = [
  { name: 'Sue', age: 25 },
  { name: 'Joe', age: 30 },
  { name: 'Frank', age: 25 },
  { name: 'Sarah', age: 35 }
];
// 发出每个 people
const source = from(people);
// 根据 age 分组
const example = source.pipe(
  groupBy(person => person.age),
  // 为每个分组返回一个数组
  mergeMap(group => group.pipe(toArray()))
);
/*
  输出:
  [{age: 25, name: "Sue"},{age: 25, name: "Frank"}]
  [{age: 30, name: "Joe"}]
  [{age: 35, name: "Sarah"}]
*/
const subscribe = example.subscribe(val => console.log(val));

