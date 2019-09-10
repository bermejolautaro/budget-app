import { Component, OnInit } from '@angular/core';

import { SpendingsService } from 'src/app/services/spendings.service';
import { Spending } from '../../../../models/Spending'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-spendings-table',
  templateUrl: './spendings-table.component.html',
  styleUrls: ['./spendings-table.component.scss']
})
export class SpendingsTableComponent implements OnInit {
  public spendings$ : Observable<Spending[]>;

  constructor(private spendingsService : SpendingsService) { }

  public ngOnInit() : void {
    this.spendings$ = this.spendingsService.getSpendings(0, 10);
  }

  public fetchSpendings(pageindex: number, pageSize: number) {
    this.spendings$ = this.spendingsService.getSpendings(pageindex, pageSize);
  }
}
