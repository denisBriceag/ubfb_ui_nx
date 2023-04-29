import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbfbNavbarDirective } from './directives/ubfb-navbar.directive';
import { UbfbTextCutterPipe } from './pipes/text-cutter.pipe';

@NgModule({
  declarations: [UbfbNavbarDirective, UbfbTextCutterPipe],
  imports: [CommonModule],
  exports: [UbfbNavbarDirective, UbfbTextCutterPipe],
})
export class SharedModule {
  constructor(@Optional() @SkipSelf() public parentSharedModule: SharedModule) {
    if (parentSharedModule) {
      throw new Error(
        `${parentSharedModule.constructor.name} has been already imported into the parent module`
      );
    }
  }
}
