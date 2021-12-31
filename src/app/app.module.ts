import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import {HeaderAndFooterModule} from "./core/layouts/header-and-footer/header-and-footer.module";
import {ControlsService} from "./core/services/controls.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], {
      initialNavigation: 'enabled',
      relativeLinkResolution: 'legacy'
    }),
    HeaderAndFooterModule,
  ],
  providers: [ControlsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
