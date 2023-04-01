import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PeekABooDirective } from './peek-a-boo.directive';
import { PeekABooComponent } from './peek-a-boo.component';
import { PeekABookParentComponent } from './peek-a-boo-parent.component';
import { SpyDirective } from './spy.directive';
import { SpyParentComponent } from './spy.component';
import { FormsModule } from '@angular/forms';
import { OnChangesComponent } from './on-changes.component';
import { OnChangesParentComponent } from './on-changes-parent-component';
import { DoCheckComponent } from './do.check.component';
import { DoCheckParentComponent } from './do-check-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    PeekABooDirective,
    PeekABooComponent,
    PeekABookParentComponent,
    SpyDirective,
    SpyParentComponent,
    OnChangesComponent,
    OnChangesParentComponent,
    DoCheckComponent,
    DoCheckParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
