import { AfterViewChecked, AfterViewInit, Component, ViewChild } from "@angular/core";
import { ChildViewComponent } from "./child-view.component";
import { LoggerService } from "./logger.service";
@Component({
    selector: 'after-view',
    template: `
        <div>child view begins</div>
        <app-child-view></app-child-view>
        <div>Child View Ends</div>

        <p *ngIf="comment" class="comment">
            {{comment}}
        </p>
    `
})
export class AfterViewComponent implements AfterViewChecked, AfterViewInit{
    comment='';
    private prevHero='';

    // Query for a view Child of Type 'ChildViewComponent'
    @ViewChild(ChildViewComponent) viewChild: ChildViewComponent;

    constructor(private logger: LoggerService){
        
    }
    ngAfterViewChecked(): void {
        // viewChild is updated after the view has been checked
        if(this.prevHero === this.viewChild.hero){
            this.logIt('AfterViewChecked (no change)');
        }else{
            this.prevHero = this.viewChild.hero;
            this.logIt('AfterViewChecked');
            this.doSomething();
        }
    }
    ngAfterViewInit(): void {
        // view child is set after the view is initalized
        this.logIt('AfterViewInit');
        this.doSomething();
    }

    private doSomething(){
        const c = this.viewChild.hero.length > 10 ? "That's a long name":'';
        if(c!==this.comment){
            // Wait a tick because the component's view has already been checked.
            this.logger.tick_then(()=>this.comment = c);
        }
    }

    private logIt(method: string){
        const child = this.viewChild;
        const message = `${method}: ${child ? child.hero :'no'} child view`;
        this.logger.log(message);
    }

}