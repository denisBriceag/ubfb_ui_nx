import { Component, OnDestroy, OnInit } from '@angular/core';
import {  NgFor } from "@angular/common";
import { takeUntil } from 'rxjs';

import { SharedModule } from "../../shared/shared.module";
import { SideBarComponent } from '../side-bar/side-bar.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from "@angular/material/menu";

import { Destroyer } from '../../utils/destroyer.helper';
import { NavbarService } from '../../shared/services/navbar-service/navbar.service';
import { MocksService } from "../../mocks/mocks.service";

import { ubfbTopbarAnimation } from "../../animations/ubfb-topbar.animation";

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
    NgFor,
    SharedModule,
  ],
  animations: [ ubfbTopbarAnimation() ],
})
export class TopBarComponent extends Destroyer implements OnInit, OnDestroy {
  private isOpen: boolean = false;
  public scrolledState: string = 'default';

  constructor(private navbarService: NavbarService, public mockService: MocksService) {
    super();
  }

  public expandSidenav(): void {
    if (!this.isOpen) {
      this.navbarService.toggleSidenav(true);
    } else {
      this.navbarService.toggleSidenav(false);
    }
  }

  ngOnInit(): void {
    this.navbarService.scrollState.pipe(
      takeUntil(this.destroy$)
    ).subscribe(({ scrollState }) => {
      this.scrolledState = scrollState;
    })

    this.navbarService.sidenavToggle
      .pipe(takeUntil(this.destroy$))
      .subscribe((isOpen: boolean) => {
        this.isOpen = isOpen;
      });
  }

  ngOnDestroy(): void {
    this.destroyMethod();
  }
}
