import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HeaderAndFooterRoutingModule} from "./header-and-footer-routing.module";
import {HeaderAndFooterComponent} from "./header-and-footer.component";
import {HeaderComponent} from "../../header/header.component";
import {FooterComponent} from "../../footer/footer.component";

@NgModule({
  imports: [CommonModule, RouterModule, HeaderAndFooterRoutingModule, ],
  declarations: [HeaderAndFooterComponent, HeaderComponent, FooterComponent],
})
export class HeaderAndFooterModule {
}
