import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteWrapperComponent } from './favourite-wrapper.component';

describe('FavouriteWrapperComponent', () => {
  let component: FavouriteWrapperComponent;
  let fixture: ComponentFixture<FavouriteWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavouriteWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FavouriteWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
