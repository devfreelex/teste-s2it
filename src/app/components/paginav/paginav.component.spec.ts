import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginavComponent } from './paginav.component';

describe('PaginavComponent', () => {
  let component: PaginavComponent;
  let fixture: ComponentFixture<PaginavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
