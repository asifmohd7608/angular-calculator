import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { NumbersComponent } from './components/numbers/numbers.component';
import { OperatorsComponent } from './components/operators/operators.component';
import { ResetComponent } from './components/reset/reset.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    NumbersComponent,
    OperatorsComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
