import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebeldeComponent } from './rebelde.component';

describe('RebeldeComponent', () => {
  let component: RebeldeComponent;
  let fixture: ComponentFixture<RebeldeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebeldeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebeldeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
