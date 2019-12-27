import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { For2Directive } from './for2.directive';

@NgModule({
  declarations: [
      AppComponent,
      For2Directive,
  ],
  imports: [
      BrowserModule,
      FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
