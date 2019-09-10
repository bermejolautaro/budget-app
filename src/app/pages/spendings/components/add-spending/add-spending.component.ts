import { Component, OnInit } from '@angular/core';
import { Spending } from '../../../../models/Spending'
import { SpendingsService } from 'src/app/services/spendings.service';
import * as moment from 'moment';


@Component({
  selector: 'app-add-spending',
  templateUrl: './add-spending.component.html',
  styleUrls: ['./add-spending.component.scss']
})
export class AddSpendingComponent implements OnInit {
  public model : Spending;

  constructor(private spendingsService: SpendingsService) {
    this.model = new Spending();
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const {description, date, amount} = this.model;
    this.spendingsService.addSpending(new Spending(description, moment(date, 'DD/MM/YYYY').format('MM/DD/YYYY'), amount));
  }

}
