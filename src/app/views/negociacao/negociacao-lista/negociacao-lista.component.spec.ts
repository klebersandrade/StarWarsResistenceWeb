import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegociacaoListaComponent } from './negociacao-lista.component';

describe('NegociacaoListaComponent', () => {
  let component: NegociacaoListaComponent;
  let fixture: ComponentFixture<NegociacaoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegociacaoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegociacaoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
