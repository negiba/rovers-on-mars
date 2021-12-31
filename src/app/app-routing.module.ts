import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [],
  declarations: [],
  providers: [],
})
export class AppRoutingModule {
}
