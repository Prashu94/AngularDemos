import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Exercise1Component } from './exercise1/exercise1.component';
import { ButtonDirective } from './exercise1/button.directive';
import { FormsModule } from '@angular/forms';
import { Exercise2Component } from './exercise2/exercise2.component';
import { Exercise3Component } from './exercise3/exercise3.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { Exercise4Component } from './exercise4/exercise4.component';
import { Exercise4ChildrenComponent } from './exercise4-children/exercise4-children.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercise1Component,
    ButtonDirective,
    Exercise2Component,
    Exercise3Component,
    ChildComponentComponent,
    Exercise4Component,
    Exercise4ChildrenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
