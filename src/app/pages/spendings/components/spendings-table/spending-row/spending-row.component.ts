import { Component, OnInit, Input } from '@angular/core';
import { Spending } from 'src/app/models/Spending';

@Component({
  selector: 'app-spending-row',
  templateUrl: './spending-row.component.html',
  styleUrls: ['./spending-row.component.scss']
})
export class SpendingRowComponent implements OnInit {

  @Input() public spending : Spending;
           
  public editing : boolean;
  
  constructor() { 
    this.editing = false;
    this.spending = null;
  }

  ngOnInit(): void {

  }

  toggleEdit(): void {
    this.editing = !this.editing;
  }

  saveChanges({description, date, amount}: Spending): void {
    this.spending = new Spending(description, date, amount);;
    this.editing = false;
  }

}
