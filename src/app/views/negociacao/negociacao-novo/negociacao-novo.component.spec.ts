import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegociacaoNovoComponent } from './negociacao-novo.component';

describe('NegociacaoNovoComponent', () => {
  let component: NegociacaoNovoComponent;
  let fixture: ComponentFixture<NegociacaoNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegociacaoNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegociacaoNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
