import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbfbNavbarDirective } from './directives/ubfb-navbar.directive';

@NgModule({
  declarations: [
    UbfbNavbarDirective
  ],
  imports: [CommonModule],
  exports: [UbfbNavbarDirective]
})
export class SharedModule {}
