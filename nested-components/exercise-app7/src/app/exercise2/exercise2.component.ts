import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from './Products';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.css']
})
export class Exercise2Component implements OnInit {
  products: Product[] = [
    new Product(100, "Mobile", 10000, 1),
    new Product(101, "Bag", 500, 1),
    new Product(102, "Shoe", 1000, 1),
    new Product(103, "Groceries", 700, 1),
    new Product(104, "Furniture", 15000, 1),
    new Product(105, "Laptop", 35000, 1)
  ];

  @Output()
  totalPrice = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
}
