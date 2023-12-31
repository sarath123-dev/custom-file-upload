import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormcustomComponent } from './formcustom/formcustom.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule, ReactiveFormsModule],
  declarations: [AppComponent, FormcustomComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
