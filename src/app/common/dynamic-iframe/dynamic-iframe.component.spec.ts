import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicIframeComponent } from './dynamic-iframe.component';

describe('DynamicIframeComponent', () => {
  let component: DynamicIframeComponent;
  let fixture: ComponentFixture<DynamicIframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicIframeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
