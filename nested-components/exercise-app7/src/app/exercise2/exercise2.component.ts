import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from './Products';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.css']
})
export class Exercise2Component implements OnInit {
  products: Product[] = [
    new Product(100, "Mobile", 10000, 1, ""),
    new Product(101, "Bag", 500, 1, ""),
    new Product(102, "Shoe", 1000, 1, ""),
    new Product(103, "Groceries", 700, 1,  ""),
    new Product(104, "Furniture", 15000, 1, ""),
    new Product(105, "Laptop", 35000, 1, "")
  ];
  totalPrices:number=0;

  @Output()
  totalPrice = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    //this.calculateTotalPrice(this.products);
    this.calculateTotalPrice();
  }

  calculateTotalPrice(){
    let isValid = true;
    this.totalPrices = this.products.reduce((accumulator, product) => {
      if(product.productQuantity === null || product.productQuantity === undefined){
        product.validationMessage = 'Product Quantity is required';
        isValid=false;
      }else if(product.productQuantity<0){
        product.validationMessage = 'Product Quantity cannot be negative';
        isValid=false;
      }else{
        product.validationMessage='';
        accumulator = accumulator + (product.productPrice * product.productQuantity)
      }
      return accumulator;
    }, 0);
    if(!isValid){
      console.log(this.totalPrices);
      //this.totalPrices=null;
    }
    return this.totalPrice.emit(this.totalPrices);
  }

  deleteRow(index: number){
    this.products.splice(index, 1);
    this.calculateTotalPrice();
  }
}
