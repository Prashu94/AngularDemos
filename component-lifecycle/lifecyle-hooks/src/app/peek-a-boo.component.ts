import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { LoggerService } from "./logger.service";
import { PeekABooDirective } from "./peek-a-boo.directive";

@Component({
    selector: 'peek-a-boo',
    template: '<p>Now you see my hero, {{name}}</p>'
})
export class PeekABooComponent extends PeekABooDirective implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

    @Input()
    name = '';

    private verb = 'initialized';

    constructor(logger: LoggerService){
        super(logger);

        const is = this.name ? 'is': 'is not';
        this.logIt(`name ${is} known at construction`);

    }

    // only called for/if there is an @Input variable set by parent.
    ngOnChanges(changes: SimpleChanges): void {
        const changeMsgs: string[] = [];
        for(const propName in changes){
            if(propName === 'name'){
                const name = changes['name'].currentValue;
                changeMsgs.push(`name ${this.verb} to "${name}"`);
            }else{
                changeMsgs.push(`${propName} ${this.verb}`);
            }
        }
        this.logIt(`OnChanges: ${changeMsgs.join('; ')}`);
        this.verb = 'changed'; // next time it will change.
    }
    // Beware! Called Frequently!
    // Called in every change detection cycle anywhere on the page.
    ngDoCheck(): void {
        this.logIt('DoCheck');
    }

    ngAfterContentInit(): void {
        this.logIt(`AfterContentInit`);
    }

    // Beware called frequently!
    // Called in every change detection cycle anywhere on the page.
    ngAfterContentChecked(): void { 
        this.logIt('AfterContentChecked');
    }

    ngAfterViewInit(): void {
        this.logIt('AfterViewInit');
    }
    //Beware! Called Frequently
    // Called in every change detection cycle anywhere on the page.
    ngAfterViewChecked(): void {
        this.logIt('AfterViewChecked');
    }
    
    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }
    
}