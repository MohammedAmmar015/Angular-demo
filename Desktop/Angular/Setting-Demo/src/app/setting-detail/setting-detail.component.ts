import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-setting-detail',
  templateUrl: './setting-detail.component.html',
  styleUrls: ['./setting-detail.component.css']
})
export class SettingDetailComponent implements OnInit {

  @Input() selectedSetting:any;

  @Input() settingList:any;

  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.paramMap.subscribe((params:ParamMap) => {
    //   let value = params.get('data');
    //   console.log(value);
    //   this.selectedSetting = JSON.parse(value!== null ? value : '');
    // })
    // this.route.paramMap.subscribe((params:ParamMap) => {
    //   let value = params.get('name');
    //   this.selectedSetting =  value!== null ? value : '';
    // })
  }

}
