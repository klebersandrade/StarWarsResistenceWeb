import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebeldeNovoComponent } from './rebelde-novo.component';

describe('RebeldeNovoComponent', () => {
  let component: RebeldeNovoComponent;
  let fixture: ComponentFixture<RebeldeNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebeldeNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebeldeNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
