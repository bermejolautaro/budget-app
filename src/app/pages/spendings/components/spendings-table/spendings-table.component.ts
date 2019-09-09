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

  private spendingsService : SpendingsService;
  public spendings$ : Observable<Spending[]>;

  constructor(spendingsService : SpendingsService) { 
    this.spendingsService = spendingsService;
  }

  public ngOnInit() : void {
    this.spendings$ = this.spendingsService.getSpendings(0, 10);
  }
}
