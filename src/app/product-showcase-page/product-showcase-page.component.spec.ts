import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShowcasePageComponent } from './product-showcase-page.component';

describe('ProductShowcasePageComponent', () => {
  let component: ProductShowcasePageComponent;
  let fixture: ComponentFixture<ProductShowcasePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductShowcasePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductShowcasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
