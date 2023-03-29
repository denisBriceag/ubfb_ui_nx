import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FavouriteWrapperComponent } from './favourite-wrapper/favourite-wrapper.component';
import { FavouriteItemComponent } from './favourite-item/favourite-item.component';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [FavouriteWrapperComponent, FavouriteItemComponent],
  imports: [CommonModule, MatCardModule],
  exports: [FavouriteWrapperComponent, FavouriteItemComponent]
})
export class FavouriteSectionModule {}
