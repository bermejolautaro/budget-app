import { Injectable, OnInit } from '@angular/core';
import { Spending } from '../models/Spending';
import { AngularFirestore, CollectionReference, Query, QueryDocumentSnapshot, DocumentSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { SpendingDTO } from '../models/SpendingDTO';

@Injectable({
  providedIn: 'root'
})
export class SpendingsService implements OnInit {
  constructor(private db : AngularFirestore) {}

  public ngOnInit(): void {

  }

  public getSpendings(pageIndex : number, pageSize: number): Observable<Spending[]>{
    let lastItem$ = this.db.collection<SpendingDTO>('spendings', ref => this.getCursorQuery(ref, pageIndex, pageSize)).snapshotChanges()
      .pipe(map(data => data[data.length - 1].payload.doc));
      
    let spendings$ = lastItem$.pipe(switchMap(lastItem => {
      return this.db.collection<SpendingDTO>('spendings', ref => this.getSpendingsQuery(ref, pageSize, lastItem)).valueChanges()
        .pipe(map((data) => data.map(item => this.mapSpendingDTOToSpending(item))))
    })); 
    
    return spendings$;
  }

  public addSpending(spending: Spending): void {
    let {amount, description, date} = spending;
    this.db.collection<Spending>('spendings').add({amount, description, date});
  }

  private mapSpendingDTOToSpending(item : SpendingDTO) : Spending {
    let {amount, date, description} = item;
    return new Spending(description, date.toDate(), amount);
  }

  private getSpendingsQuery<T>(ref: CollectionReference, pageSize: number, lastItem: QueryDocumentSnapshot<T>): Query{
    let query : CollectionReference | Query = ref;
    query = query.limit(pageSize).orderBy('date', 'desc').startAt(lastItem);
    return query;
  }

  private getCursorQuery(ref: CollectionReference, pageIndex: number, pageSize: number): Query {
    let query : CollectionReference | Query = ref;
    query = query.orderBy('date', 'desc').limit(pageIndex * pageSize == 0 ? 1 : pageIndex * pageSize);
    return query;
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