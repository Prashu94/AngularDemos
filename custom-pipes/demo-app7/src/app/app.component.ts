import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options:any[] = ["Product Name", "Price"];
  selectedOption!:string;
  productsList = [
    {productName: 'Samsung J7', price: 18000},
    {productName: 'Apple iPhone 6S', price: 60000},
    {productName: 'Lenovo K5 Note', price: 15000},
    {productName: 'Vivo V5 Plus', price: 26000}
  ]

  onSelect(option: string){
    this.selectedOption = option;
  }
}
