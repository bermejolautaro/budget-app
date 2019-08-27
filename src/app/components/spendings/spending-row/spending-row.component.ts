import { Component, OnInit, Input } from '@angular/core';
import { Spending } from 'src/app/models/Spending';

@Component({
  selector: 'app-spending-row',
  templateUrl: './spending-row.component.html',
  styleUrls: ['./spending-row.component.css']
})
export class SpendingRowComponent implements OnInit {

  @Input() public spending : Spending;
  @Input() public index : number;
           
  public editing : boolean;
  

  constructor() { 
    this.editing = false;
    this.index = 0;
    this.spending = null;
  }

  ngOnInit() : void {
  }

  toggleEdit() : void {
    this.editing = !this.editing;
  }

  saveChanges(description: string, date: Date, amount: number) : void {
    let inputSpending : Spending = new Spending(description, date, amount);
    this.spending = inputSpending;
    this.editing = false;
  }

}
