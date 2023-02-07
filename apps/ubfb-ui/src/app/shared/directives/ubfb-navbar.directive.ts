import { Directive, HostListener } from '@angular/core';
import {NavbarService} from "../services/navbar-service/navbar.service";

@Directive({
  selector: '[ubfbNavbarDirective]'
})
export class UbfbNavbarDirective {
  constructor(private navbarService: NavbarService) { }

  @HostListener('window:scroll') public onNavBarScroll(): void {
    if (window.scrollY >= 10) {
      this.navbarService.changeScrollState({ scrollState: 'scrolled', isScrolled: true});
    } else {
      this.navbarService.changeScrollState({ scrollState: 'default', isScrolled: false});
    }
  }
}
