import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-product-select',
  templateUrl: './product-select.component.html',
  styleUrls: ['./product-select.component.scss'],
  animations: [
    trigger('expansion', [
      state('expanded', style({height: '*', minHeight: '20px', padding: '20px'})),
      state('collapsed', style({height: '0', minHeight: '0', padding: '0'})),
      transition('expanded <=> collapsed', [
        animate('0.25s ease-in-out')
      ]),
    ]),
    trigger('rotateArrow', [
      state('expanded', style({transform: 'rotate(0)', transformOrigin: '50% 40%'})),
      state('collapsed', style({transform: 'rotate(180deg)', transformOrigin: '50% 40%'})),
      transition('expanded <=> collapsed', [
        animate('0.25s ease-in-out')
      ]),
    ])
  ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: ProductSelectComponent,
    multi: true
  }]
})
export class ProductSelectComponent implements OnInit, ControlValueAccessor {

  @Input()
  products: Product[] = [];

  selectedProduct?: Product;

  expanded: boolean = true;
  fnChange: any;
  fnTouched: any;

  constructor() { }

  ngOnInit(): void {
  }

  registerOnChange(fn: any): void {
    this.fnChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.fnTouched = fn;
  }

  writeValue(obj: any): void {
    this.selectedProduct = obj;
  }

  togglePanel() {
    this.expanded = !this.expanded;
  }

  selectProduct(prod: Product) {
    this.selectedProduct = prod;
    this.fnChange(prod);
    this.fnTouched(prod);
  }

  set value(val: Product){
    this.selectedProduct = val;
  }
}
