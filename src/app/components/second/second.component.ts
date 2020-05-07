import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  productForm = new FormGroup({
    ProductID: new FormControl('',[Validators.required]),
    ProductName: new FormControl('',[Validators.required]),
    ProductDetail: new FormControl('',[Validators.required]),
    Quantity: new FormControl('', [Validators.required, Validators.pattern('[1-50]')]),
    Price: new FormControl('', [Validators.required, Validators.pattern('[1-100000]')])
  });

  productType: string[] = ['CPU','RAM','HDD','Mainboard'];

  get Quantity() {
    return this.productForm.get('Quantity');
  }
  get Price() {
    return this.productForm.get('Price');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
