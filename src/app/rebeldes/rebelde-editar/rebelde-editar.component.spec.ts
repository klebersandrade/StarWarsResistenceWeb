import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebeldeEditarComponent } from './rebelde-editar.component';

describe('RebeldeEditarComponent', () => {
  let component: RebeldeEditarComponent;
  let fixture: ComponentFixture<RebeldeEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebeldeEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebeldeEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
