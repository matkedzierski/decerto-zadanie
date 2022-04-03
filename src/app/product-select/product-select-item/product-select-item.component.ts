import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../models/product.model";

@Component({
  selector: 'app-product-select-item',
  templateUrl: './product-select-item.component.html',
  styleUrls: ['./product-select-item.component.scss']
})
export class ProductSelectItemComponent implements OnInit {

  @Input()
  product?: Product;

  @Input()
  selected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
