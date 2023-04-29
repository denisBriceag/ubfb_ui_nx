import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { SharedModule } from '../../modules/shared/shared.module';
import { SideBarComponent } from '../side-bar/side-bar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';

import { NavbarService } from '../../modules/shared/services/navbar-service/navbar.service';
import { MocksService } from '../../mocks/mocks.service';

import { ubfbTopbarAnimation } from '../../animations/ubfb-topbar.animation';
import { MatBadgeModule } from '@angular/material/badge';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'ubfb-top-bar',
  standalone: true,
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatSidenavModule,
    SideBarComponent,
    MatMenuModule,
    MatBadgeModule,
    NgFor,
    SharedModule,
  ],
  animations: [ubfbTopbarAnimation()],
})
export class TopBarComponent implements OnInit {
  private isOpen: boolean = false;
  public scrolledState: string = 'default';

  constructor(
    private navbarService: NavbarService,
    public mockService: MocksService
  ) {}

  public expandSidenav(): void {
    if (!this.isOpen) {
      this.navbarService.toggleSidenav(true);
    } else {
      this.navbarService.toggleSidenav(false);
    }
  }

  ngOnInit(): void {
    this.navbarService.scrollState
      .pipe(untilDestroyed(this))
      .subscribe(({ scrollState }) => {
        this.scrolledState = scrollState;
      });

    this.navbarService.sidenavToggle
      .pipe(untilDestroyed(this))
      .subscribe((isOpen: boolean) => {
        this.isOpen = isOpen;
      });
  }
}
