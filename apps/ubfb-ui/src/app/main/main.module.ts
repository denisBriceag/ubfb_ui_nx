import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { UbfbDashboardComponent } from './ubfb-dashboard/ubfb-dashboard.component';

@NgModule({
  declarations: [CarouselComponent, UbfbDashboardComponent],
  imports: [CommonModule],
})
export class MainModule {}
