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
import { ChildViewComponent } from './child-view.component';
import { ChildComponent } from './child.component';
import { AfterViewComponent } from './after-view.component';
import { AfterViewParentComponent } from './after-view-parent.component';
import { AfterContentComponent } from './after-content.component';
import { AfterContentParentComponent } from './after-content-parent.component';
import { MyCounterComponent } from './counter.component';
import { CounterParentComponent } from './counter-parent.component';

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
    DoCheckParentComponent,
    ChildViewComponent,
    ChildComponent,
    AfterViewComponent,
    AfterViewParentComponent,
    AfterContentComponent,
    AfterContentParentComponent,
    MyCounterComponent,
    CounterParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
