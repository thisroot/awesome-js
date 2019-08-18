import { asyncScheduler, from, asapScheduler, queueScheduler } from 'rxjs';
import { observeOn } from 'rxjs/operators';
 
{

console.log('just before subscribe');

from(['b', 'c', 'd'])
  .pipe(observeOn(asyncScheduler))
  .subscribe(vl => console.log('asyncScheduler'))

from(['b', 'c', 'd'])
  .pipe(observeOn(asapScheduler))
  .subscribe(vl => console.log('asapScheduler'))

from(['b', 'c', 'd'])
.pipe(observeOn(queueScheduler))
.subscribe(vl => console.log('queueScheduler'))
 
console.log('just after subscribe')

}