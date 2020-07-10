import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WertpapierComponent } from './wertpapier.component';

describe('WertpapierComponent', () => {
  let component: WertpapierComponent;
  let fixture: ComponentFixture<WertpapierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WertpapierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WertpapierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
