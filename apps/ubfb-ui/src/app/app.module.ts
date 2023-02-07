import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { TopBarComponent } from './shared-components/top-bar/top-bar.component';
import { BottomBarComponent } from './shared-components/bottom-bar/bottom-bar.component';
import { SideBarComponent } from './shared-components/side-bar/side-bar.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    TopBarComponent,
    BottomBarComponent,
    SideBarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
