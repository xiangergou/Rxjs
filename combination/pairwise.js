
// 将前一个值和当前值作为数组发出



import { pairwise, take } from 'rxjs/operators';
import { interval } from 'rxjs';

// 返回: [0,1], [1,2], [2,3], [3,4], [4,5]
interval(1000)
  .pipe(
    pairwise(),
    take(5)
  )
  .subscribe(console.log);
