import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UbfbDashboardComponent} from "./main/ubfb-dashboard/ubfb-dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: UbfbDashboardComponent
  },
  {
    path: 'about',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule).catch(() => {
      throw new Error('Lazy module was not loaded properly');
    })
  },
  {
    path: 'about',
    component: UbfbDashboardComponent
  },
  {
    path: 'about',
    component: UbfbDashboardComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', //default
      // preloadingStrategy: CustomPreloadingStrategy,
      useHash: true, //path after hash will not be transmited to server
      paramsInheritanceStrategy: 'always', //emtyOnly is default
      // malformedUriErrorHandler: malformedUriErrorHandlerMethod //handles unknown url parameters
    }),
  ],
  exports: [RouterModule],
  // providers: [CanLoadAuthGuard]
})
export class AppRoutingModule {}
