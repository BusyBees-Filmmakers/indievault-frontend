import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmmakerProfileComponent } from './filmmaker-profile.component';

describe('FilmmakerProfileComponent', () => {
  let component: FilmmakerProfileComponent;
  let fixture: ComponentFixture<FilmmakerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmmakerProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilmmakerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
