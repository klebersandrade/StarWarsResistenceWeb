import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebeldeListaComponent } from './rebelde-lista.component';

describe('RebeldeListaComponent', () => {
  let component: RebeldeListaComponent;
  let fixture: ComponentFixture<RebeldeListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebeldeListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebeldeListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
