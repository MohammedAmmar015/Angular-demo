import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingDetailComponent } from './setting-detail/setting-detail.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  // {
  //   path:'settings', 
  //   component:SettingsComponent,
  //   children: [
  //     {path:':name', component:SettingDetailComponent},
  //   ]
  // },
  {
    path:'settings', 
    component:SettingsComponent,
  },
  {
    path:'settings/:name', 
    component:SettingsComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
