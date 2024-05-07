import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTCCComponent } from './formulario-tcc.component';

describe('FormularioTCCComponent', () => {
  let component: FormularioTCCComponent;
  let fixture: ComponentFixture<FormularioTCCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioTCCComponent]
    });
    fixture = TestBed.createComponent(FormularioTCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
