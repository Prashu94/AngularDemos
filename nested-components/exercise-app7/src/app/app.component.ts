import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message!:string;
  discountMessage!:string;
  totalPrices(totalPrice: number){
    this.message = `The total Price is ${totalPrice}`
    this.discountMessage = totalPrice > 100000 ? `You are eligible for discount`: ``;
  }
}
