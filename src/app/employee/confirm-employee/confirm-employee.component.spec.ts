import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmEmployeeComponent } from './confirm-employee.component';

describe('ConfirmEmployeeComponent', () => {
  let component: ConfirmEmployeeComponent;
  let fixture: ComponentFixture<ConfirmEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
