import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  selectedSetting:any;

  settingList = [
    {
      id:1,
      name: 'Dictionaries',
      url: 'dictionary'
    },
    {
      id:2,
      name: 'Facilities',
      url: 'facilities'
    },
    {
      id:3,
      name: 'Message Log',
      url: 'messageLog'
    },
    {
      id:4,
      name: 'Payors',
      url: 'insurance'
    },
    {
      id:5,
      name: 'Providers',
      url: 'provider'
    },
    {
      id:6,
      name: 'Regions',
      url: 'regions'
    },
    {
      id:7,
      name: 'Roles',
      url: 'roles'
    },
    {
      id:8,
      name: 'Search',
      url: 'search'
    },
    {
      id:9,
      name: 'Sessions',
      url: 'sessions'
    },
    {
      id:10,
      name: 'Staff',
      url: 'staff'
    },
    {
      id:11,
      name: 'Workflow',
      url: 'workflow'
    }
  ];

  onSettingSelect(setting:any) {
    this.selectedSetting = setting;
  }
  
}
