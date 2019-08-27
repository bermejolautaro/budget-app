import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { SpendingsTableComponent } from './components/spendings/spendings-table/spendings-table.component';
import { AppRoutingModule } from './app-routing.module';
import { SpendingsComponent } from './pages/spendings/spendings.component';
import { AddSpendingComponent } from './components/spendings/add-spending/add-spending.component';
import { SpendingRowComponent } from './components/spendings/spending-row/spending-row.component';
import { SpendingCellComponent } from './components/spendings/spending-cell/spending-cell.component';
import { DateValidatorDirective } from './shared/date-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    SpendingsTableComponent,
    SpendingsComponent,
    AddSpendingComponent,
    SpendingRowComponent,
    SpendingCellComponent,
    DateValidatorDirective
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
