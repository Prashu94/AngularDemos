import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Exercise1Component } from './exercise1/exercise1.component';
import { Exercise2Component } from './exercise2/exercise2.component';
import { ButtonDirective } from './exercise1/button.directive';
import { FormsModule } from '@angular/forms';
import { RepeatDirective } from './exercise2/repeat.directive';

@NgModule({
  declarations: [
    AppComponent,
    Exercise1Component,
    Exercise2Component,
    ButtonDirective,
    RepeatDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
