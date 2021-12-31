import {NgModule} from '@angular/core';
import {ExpeditionComponent} from "./expedition.component";
import {CommonModule} from "@angular/common";
import {ExpeditionRoutingModule} from "./expedition-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ControlTableComponent} from "../../core/control-table/control-table.component";
import {RoverService} from "../../core/services/rover.service";
import {HttpClientModule} from "@angular/common/http";
import {PlateauService} from "../../core/services/plateau.service";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [CommonModule, ExpeditionRoutingModule, ReactiveFormsModule, HttpClientModule, SharedModule],
  exports: [],
  declarations: [ExpeditionComponent, ControlTableComponent],
  providers: [RoverService, PlateauService]
})
export class ExpeditionModule {
}
