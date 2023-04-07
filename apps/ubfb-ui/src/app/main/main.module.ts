import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { UbfbDashboardComponent } from './ubfb-dashboard/ubfb-dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {FavouriteSectionModule} from "./favouirite-section/favourite-section.module";
import {SwiperModule} from "swiper/angular";

@NgModule({
  declarations: [
    CarouselComponent,
    UbfbDashboardComponent,
  ],
  imports: [CommonModule, MatIconModule, MatDividerModule, FavouriteSectionModule, SwiperModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [UbfbDashboardComponent],
})
export class MainModule {}
