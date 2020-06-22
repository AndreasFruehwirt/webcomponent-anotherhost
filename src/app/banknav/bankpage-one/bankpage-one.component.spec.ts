import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankpageOneComponent } from './bankpage-one.component';

describe('BankpageOneComponent', () => {
  let component: BankpageOneComponent;
  let fixture: ComponentFixture<BankpageOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankpageOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankpageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
