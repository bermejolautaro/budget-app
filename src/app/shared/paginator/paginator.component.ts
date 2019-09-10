import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Output() paginationEvent: EventEmitter<void>;
  private _pageIndex: number;
  private _pageSize: number;

  get pageIndex(){
    return this._pageIndex;
  }

  set pageIndex(value: number) {
    this._pageIndex = value;
    this.paginationEvent.emit();
  }

  get pageSize(){
    return this._pageSize;
  }

  set pageSize(value: number) {
    this._pageSize = value;
    this.paginationEvent.emit();
  }

  constructor() { 
    this._pageIndex = 0;
    this._pageSize = 10;
    this.paginationEvent = new EventEmitter<void>();
  }

  ngOnInit() {
  }
}
