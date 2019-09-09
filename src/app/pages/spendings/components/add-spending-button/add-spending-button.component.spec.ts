import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpendingButtonComponent } from './add-spending-button.component';

describe('AddSpendingButtonComponent', () => {
  let component: AddSpendingButtonComponent;
  let fixture: ComponentFixture<AddSpendingButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSpendingButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSpendingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
