import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankpageTwoComponent } from './bankpage-two.component';

describe('BankpageTwoComponent', () => {
  let component: BankpageTwoComponent;
  let fixture: ComponentFixture<BankpageTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankpageTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankpageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
