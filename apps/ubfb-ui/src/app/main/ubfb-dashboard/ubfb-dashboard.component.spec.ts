import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbfbDashboardComponent } from './ubfb-dashboard.component';

describe('UbfbDashboardComponent', () => {
  let component: UbfbDashboardComponent;
  let fixture: ComponentFixture<UbfbDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UbfbDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UbfbDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
