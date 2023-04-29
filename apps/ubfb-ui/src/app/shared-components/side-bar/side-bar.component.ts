import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarService } from '../../modules/shared/services/navbar-service/navbar.service';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MocksService } from '../../mocks/mocks.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
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
export class SideBarComponent implements OnInit {
  public isOpened: boolean = false;

  constructor(
    private navbarService: NavbarService,
    public mockService: MocksService
  ) {}

  public onSidenavClosed(): void {
    this.navbarService.resetSidenavToggle();
  }

  public ngOnInit(): void {
    this.navbarService.sidenavToggle
      .pipe(untilDestroyed(this))
      .subscribe((isOpened) => {
        this.isOpened = isOpened;
      });
  }
}
