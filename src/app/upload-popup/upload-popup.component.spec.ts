import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPopupComponent } from './upload-popup.component';

describe('UploadPopupComponent', () => {
  let component: UploadPopupComponent;
  let fixture: ComponentFixture<UploadPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
