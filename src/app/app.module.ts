import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductSelectComponent } from './product-select/product-select.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ProductSelectItemComponent } from './product-select/product-select-item/product-select-item.component';
import {ReactiveFormsModule} from "@angular/forms";
import { TooltipDirective } from './product-select/product-select-item/tooltip/tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductSelectComponent,
    ProductSelectItemComponent,
    TooltipDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
