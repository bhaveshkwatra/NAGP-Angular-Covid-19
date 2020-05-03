import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateReportComponent } from './state-report.component';

describe('StateReportComponent', () => {
  let component: StateReportComponent;
  let fixture: ComponentFixture<StateReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
