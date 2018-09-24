import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFinishComponent } from './modal-finish.component';

describe('ModalFinishComponent', () => {
  let component: ModalFinishComponent;
  let fixture: ComponentFixture<ModalFinishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFinishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
