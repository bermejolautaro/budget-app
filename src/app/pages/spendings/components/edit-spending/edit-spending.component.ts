import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Spending } from 'src/app/models/Spending';

@Component({
  selector: 'app-edit-spending',
  templateUrl: './edit-spending.component.html',
  styleUrls: ['./edit-spending.component.scss']
})
export class EditSpendingComponent implements OnInit {

  @Input() public spending: Spending;
  @Output() private saveChangesEvent: EventEmitter<void>;
  @Output() private cancelEvent: EventEmitter<void>;

  constructor() { 
    this.saveChangesEvent = new EventEmitter<void>();
    this.cancelEvent = new EventEmitter<void>();

  }

  ngOnInit() {
  }

  public saveChanges() {
    this.saveChangesEvent.emit();
  }

  public cancel() {
    this.cancelEvent.emit();
  }

}
