import {NgModule} from '@angular/core';
import {BasicButtonComponent} from "./components/basic-button/basic-button.component";
import {RoverComponent} from "./components/rover/rover.component";
import {GridCellComponent} from "./components/grid-cell/grid-cell.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [BasicButtonComponent, RoverComponent, GridCellComponent],
  exports: [BasicButtonComponent, RoverComponent, GridCellComponent],
  imports: [
    CommonModule
  ],
})
export class SharedModule {
}
