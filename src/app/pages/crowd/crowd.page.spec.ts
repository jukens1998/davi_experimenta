import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrowdPage } from './crowd.page';

describe('CrowdPage', () => {
  let component: CrowdPage;
  let fixture: ComponentFixture<CrowdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrowdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrowdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
