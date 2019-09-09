import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { SpendingsTableComponent } from './pages/spendings/components/spendings-table/spendings-table.component';
import { AppRoutingModule } from './app-routing.module';
import { SpendingsComponent } from './pages/spendings/spendings.component';
import { AddSpendingComponent } from './pages/spendings/components/add-spending/add-spending.component';
import { SpendingRowComponent } from './pages/spendings/components/spendings-table/spending-row/spending-row.component';
import { SpendingCellComponent } from './pages/spendings/components/spendings-table/spending-row/spending-cell/spending-cell.component';
import { DateValidatorDirective } from './shared/date-validator/date-validator.directive';
import { AddSpendingButtonComponent } from './pages/spendings/components/add-spending-button/add-spending-button.component';
import { ModalComponent } from './shared/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SpendingsTableComponent,
    SpendingsComponent,
    AddSpendingComponent,
    SpendingRowComponent,
    SpendingCellComponent,
    DateValidatorDirective,
    AddSpendingButtonComponent,
    ModalComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
