import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { takeUntil } from 'rxjs';

import { NavbarService } from '../../modules/shared/services/navbar-service/navbar.service';
import { Destroyer } from '../../utils/destroyer.helper';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MocksService } from '../../mocks/mocks.service';


@Component({
  selector: 'ubfb-side-bar',
  standalone: true,
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    MatTabsModule,
  ],
})
export class SideBarComponent extends Destroyer implements OnInit, OnDestroy {
  public isOpened: boolean = false;

  constructor(
    private navbarService: NavbarService,
    public mockService: MocksService
  ) {
    super();
  }

  public onSidenavClosed(): void {
    this.navbarService.resetSidenavToggle();
  }

  public ngOnInit(): void {
    this.navbarService.sidenavToggle
      .pipe(takeUntil(this.destroy$))
      .subscribe((isOpened) => {
        this.isOpened = isOpened;
      });
  }

  public ngOnDestroy(): void {
    this.destroyMethod();
  }
}
