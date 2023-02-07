import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

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
