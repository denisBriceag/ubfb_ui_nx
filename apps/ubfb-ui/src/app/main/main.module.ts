import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { UbfbDashboardComponent } from './ubfb-dashboard/ubfb-dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { SwiperModule } from 'swiper/angular';
import { SharedModule } from '../modules/shared/shared.module';
import { FavouriteItemsComponent } from './favourite-items/favourite-items.component';
import { ProductItemComponent } from '../shared-components/product-item/product-item.component';
import { MatCardModule } from '@angular/material/card';
import { ComboItemsComponent } from './combo-items/combo-items.component';

@NgModule({
  declarations: [
    CarouselComponent,
    UbfbDashboardComponent,
    FavouriteItemsComponent,
    ComboItemsComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    SwiperModule,
    SharedModule,
    ProductItemComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [UbfbDashboardComponent],
})
export class MainModule {}
