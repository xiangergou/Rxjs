// 立即完成的 observable 


import { empty } from 'rxjs';

// 输出: 'Complete!'
const subscribe = empty().subscribe({
  next: () => console.log('Next'),
  complete: () => console.log('Complete!')
});
