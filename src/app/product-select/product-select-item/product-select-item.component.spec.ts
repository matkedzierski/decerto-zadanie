import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSelectItemComponent } from './product-select-item.component';

describe('ProductSelectItemComponent', () => {
  let component: ProductSelectItemComponent;
  let fixture: ComponentFixture<ProductSelectItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSelectItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSelectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
