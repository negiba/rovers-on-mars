import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HeaderAndFooterComponent} from "./header-and-footer.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'prefix' },
  { path: '', component: HeaderAndFooterComponent, children: [
      { path: 'home', loadChildren: () => import('../../../modules/home/home.module').then(m => m.HomeModule) },
      { path: 'expedition-grid', loadChildren: () => import('../../../modules/expedition-grid/expedition-grid.module').then(m => m.ExpeditionGridModule) },
      { path: 'expedition', loadChildren: () => import('../../../modules/expedition/expedition.module').then(m => m.ExpeditionModule)}
    ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderAndFooterRoutingModule {
}
