import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebeldeLocalizarComponent } from './rebelde-localizar.component';

describe('RebeldeLocalizarComponent', () => {
  let component: RebeldeLocalizarComponent;
  let fixture: ComponentFixture<RebeldeLocalizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebeldeLocalizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebeldeLocalizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
