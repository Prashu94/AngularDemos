import { Component, ViewChild } from "@angular/core";
import { Hero } from "./hero";
import { DoCheckComponent } from "./do.check.component";

@Component({
    selector: 'do-check-parent',
    templateUrl: './do-check-parent.component.html'
})
export class DoCheckParentComponent{
    hero!:Hero;
    power = '';
    title = 'DoCheck';
    @ViewChild(DoCheckComponent) childView!: DoCheckComponent;

    constructor(){
        this.reset();
    }

    reset(){
        this.hero=new Hero("Windstorm");
        this.power='sing';
        if(this.childView){
            this.childView.reset();
        }
    }

}