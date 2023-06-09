import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingDetailComponent } from './setting-detail.component';

describe('SettingDetailComponent', () => {
  let component: SettingDetailComponent;
  let fixture: ComponentFixture<SettingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
