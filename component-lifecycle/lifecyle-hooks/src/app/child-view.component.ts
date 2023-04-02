import { Component } from "@angular/core";

@Component({
    selector: 'app-child-view',
    template: `
        <label for="hero-name">Hero Name:</label>
        <input type="text" id="hero-name" [(ngModel)]="hero"/>
    `
})
export class ChildViewComponent{
    hero="Magneta";
}