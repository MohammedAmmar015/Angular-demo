import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-setting-list',
  templateUrl: './setting-list.component.html',
  styleUrls: ['./setting-list.component.css']
})
export class SettingListComponent {

  selectedSetting = '';

  @Input() settingList:any;

  @Output() onSelect = new EventEmitter();

  constructor(private router:Router, private route:ActivatedRoute) {}

  onSettingSelect(setting:any) {
    // this.selectedSetting = setting.url;
    // this.router.navigate([setting.url], {relativeTo:this.route});
    this.onSelect.emit(setting);
  }

  isSelected(setting:any) {
    return setting.url === this.selectedSetting;
  }
}
