import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingListComponent } from './setting-list/setting-list.component';
import { SettingDetailComponent } from './setting-detail/setting-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    SettingListComponent,
    SettingDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
