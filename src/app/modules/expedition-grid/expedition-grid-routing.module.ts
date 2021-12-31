import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {ExpeditionGridComponent} from "./expedition-grid.component";

const routes: Routes = [
  { path: '', component: ExpeditionGridComponent}
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class ExpeditionGridRoutingModule {
}
