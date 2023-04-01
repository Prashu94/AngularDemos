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
  productDiscount: number = 0.1;
  productDate:string = "4/1/2023";
  productDateTime: string = '4/1/2023, 00:00:00 AM';
}
