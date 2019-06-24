import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebeldeReportarComponent } from './rebelde-reportar.component';

describe('RebeldeReportarComponent', () => {
  let component: RebeldeReportarComponent;
  let fixture: ComponentFixture<RebeldeReportarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebeldeReportarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebeldeReportarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
