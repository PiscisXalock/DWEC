import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarNombreYApellidoComponent } from './generar-nombre-y-apellido.component';

describe('GenerarNombreYApellidoComponent', () => {
  let component: GenerarNombreYApellidoComponent;
  let fixture: ComponentFixture<GenerarNombreYApellidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarNombreYApellidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarNombreYApellidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
