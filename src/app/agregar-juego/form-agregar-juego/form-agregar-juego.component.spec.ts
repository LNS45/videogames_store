import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAgregarJuegoComponent } from './form-agregar-juego.component';

describe('FormAgregarJuegoComponent', () => {
  let component: FormAgregarJuegoComponent;
  let fixture: ComponentFixture<FormAgregarJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAgregarJuegoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAgregarJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
