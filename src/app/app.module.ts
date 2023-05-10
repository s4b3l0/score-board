import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbSidebarService,
  NbButtonModule,
  NbDialogModule,
  NbActionsModule,
  NbDatepickerModule,
  NbTimepickerModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import {PagesModule} from "./pages/pages.module";
import {UtilModule} from "./util/util.module";
import {LoggedInModule} from "./pages/logged-in-pages/logged-in.module";
import {ApiModule} from "./api/api.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'corporate'}),
    NbLayoutModule,
    LoggedInModule,
    NbDialogModule.forRoot(),
    NbTimepickerModule.forRoot(),
    ApiModule,
    NbEvaIconsModule,
    AppRoutingModule,
    NbSidebarModule,
    NbButtonModule,
    PagesModule,
    UtilModule,
    NbDatepickerModule.forRoot(),
    NbActionsModule,
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
