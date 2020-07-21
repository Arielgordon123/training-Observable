import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable, of } from 'rxjs';
import { concatMap,  every, filter, first, map, mergeMap, take } from 'rxjs/operators';
import { FlagService } from '../flag-service.service';
import { Flag } from '../Model/flag';

@Component({
  selector: 'flag-list',
  templateUrl: './flag-list.component.html',
  styleUrls: ['./flag-list.component.scss']
})
export class FlagListComponent implements OnInit {

  flags$: Observable<any>;
  constructor(private flagsService: FlagService) { }

  ngOnInit(): void {

    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(
      concatMap(ev => [1, 2, 3, 4])

    );
    result.subscribe(x => console.log(x));



    this.flagsService.getFlagList().pipe(
      concatMap(flags => flags)
    ).pipe(
      filter(flag => flag.name.startsWith("A"))
    ).
    subscribe(flag => {
      console.log('flag :>> ', flag.name);
    })


    // const source = of(2000, 1000);
    // // map value from source into inner observable, when complete emit result and move to next
    // const example = source.pipe(
    //   concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    // );
    // //output: With concatMap: Delayed by: 2000ms, With concatMap: Delayed by: 1000ms
    // const subscribe = example.subscribe(val =>
    //   console.log(`With concatMap: ${val}`)
    // );

    // // showing the difference between concatMap and mergeMap
    // const mergeMapExample = source
    //   .pipe(
    //     // just so we can log this after the first example has run
    //     delay(5000),
    //     mergeMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    //   )
    //   .subscribe(val => console.log(`With mergeMap: ${val}`));



    // const observable = new Observable<number[]>(subscriber => {
    //   console.log('inside Observable :>> ');
    //   // subscriber.next(1);
    //   subscriber.next([1,2,3]);
    //   subscriber.next([3,5,4,5]);

    //   // subscriber.next(3);
    //   setTimeout(() => {
    //     // subscriber.next(4);
    //     subscriber.complete();
    //   }, 1000);
    // });
    // observable.pipe(map((value, index)=>{
    //   console.log('value,index :>> ', value,index);
    //   return value.filter(y => y>2)
    // }))
    // .subscribe((item)=> {
    //   console.log('item :>> ', item);
    // })
    //   observable.subscribe((item)=> {
    //     console.log('item2 :>> ', item);
    //   })

  }
}
