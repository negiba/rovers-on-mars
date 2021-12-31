import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ExpeditionGridRoutingModule} from "./expedition-grid-routing.module";
import {ExpeditionGridComponent} from "./expedition-grid.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {PlateauService} from "../../core/services/plateau.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [CommonModule, ExpeditionGridRoutingModule, ReactiveFormsModule, SharedModule, HttpClientModule],
  exports: [],
  declarations: [ExpeditionGridComponent],
  providers: [PlateauService],
})
export class ExpeditionGridModule {
}
