import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app6';
  productCode: string = "PROD_P001";
  productName: string = "Laptop";
  productPrice: number = 66600;
}
