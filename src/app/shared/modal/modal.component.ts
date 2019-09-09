import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  state: boolean;
  constructor() { }

  public ngOnInit() {
    if (!Boolean(this.title) || this.title.length === 0) this.title = "Default title";
  }

  public open() {
    this.state = true;
  }

  public close() {
    this.state = false;
  }

  public isOpen() {
    return this.state;
  }

  public isClosed() {
    return !this.state;
  }
}
