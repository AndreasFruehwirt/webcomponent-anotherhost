import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFragmentLoaderComponent } from './page-fragment-loader.component';

describe('PageFragmentLoaderComponent', () => {
  let component: PageFragmentLoaderComponent;
  let fixture: ComponentFixture<PageFragmentLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFragmentLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFragmentLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
