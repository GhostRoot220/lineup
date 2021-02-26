import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeShopPage } from './home-shop.page';

describe('HomeShopPage', () => {
  let component: HomeShopPage;
  let fixture: ComponentFixture<HomeShopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeShopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
