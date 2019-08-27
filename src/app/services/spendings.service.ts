import { Injectable, OnInit } from '@angular/core';
import { Spending } from '../models/Spending';
import { DocumentChangeAction, AngularFirestore, CollectionReference, Query, QueryDocumentSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';
import { SpendingDTO } from '../models/SpendingDTO';

@Injectable({
  providedIn: 'root'
})
export class SpendingsService implements OnInit {
  private lastSpendingId : string;

  constructor(private angularFirestore : AngularFirestore) {}

  public ngOnInit(): void {

  }

  public getSpendings(pageIndex : number, pageSize: number) : Observable<Spending[]>{
    return this.angularFirestore.collection<SpendingDTO>('spendings', ref => {
        let query : CollectionReference | Query = ref;
        query = query.limit(pageIndex * pageSize == 0 ? 1 : pageIndex * pageSize);
        console.log(query);
        return query;
      })
      .snapshotChanges()
      .pipe(map(data => data[data.length - 1].payload.doc)
      ).pipe(switchMap(lastItem => {
        return this.angularFirestore.collection<SpendingDTO>('spendings', ref => {
          let query : CollectionReference | Query = ref;
          query = query.limit(pageSize);
          query = query.orderBy('date', 'desc')
          query = query.startAt(lastItem);
          return query;
        }).snapshotChanges()
          .pipe(
            tap(data => console.log(data.map(x => x.payload.doc.id))),
            map(data => data.map(item => this.mapSpendingDTOToSpending(item)))
          ) 
      })); 
  }

  public addSpending(spending: Spending) : void {
    let {amount, description, date} = spending;
    this.angularFirestore.collection<Spending>('spendings').add({amount, description, date});
  }

  private mapSpendingDTOToSpending(item : DocumentChangeAction<SpendingDTO>) : Spending {
    let {amount, date, description} = item.payload.doc.data();
    return new Spending(description, date.toDate(), amount);
  }

}


// return this.angularFirestore.collection<SpendingDTO>('spendings', ref => {
//   let query : CollectionReference | Query = ref;
//   query = query.limit(pageIndex * pageSize);
//   lastItem$.subscribe(x => query = query.startAt(x))
//   return query;
// }).snapshotChanges()
//   .pipe(
//     map(data => data.map(item => this.mapSpendingDTOToSpending(item)))
//   )   