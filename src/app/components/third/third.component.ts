import { Component, OnInit } from '@angular/core';
import { ProductService } from 'C:/Users/tee16/Desktop/Ex/b6025427midterm523419/src/app/services/product.service'

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor(private productsService: ProductService) {
    
   }

  ngOnInit(): void {
  }

  getAllProduct() {
    console.log("getAllProduct Work"); 
    return this.productsService.getAllProduct()
  }
  

}
