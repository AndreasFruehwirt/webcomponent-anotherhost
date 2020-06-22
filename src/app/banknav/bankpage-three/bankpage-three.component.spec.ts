import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankpageThreeComponent } from './bankpage-three.component';

describe('BankpageThreeComponent', () => {
  let component: BankpageThreeComponent;
  let fixture: ComponentFixture<BankpageThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankpageThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankpageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
