import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { FormsModule } from '@angular/forms';
import { ButtonDirective } from './button.directive';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ReverseIfDirective } from './reverse-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    AttributeDirectiveComponent,
    ButtonDirective,
    StructuralDirectivesComponent,
    ReverseIfDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
