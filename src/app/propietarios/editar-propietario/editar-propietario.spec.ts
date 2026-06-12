import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPropietario } from './editar-propietario';

describe('EditarPropietario', () => {
  let component: EditarPropietario;
  let fixture: ComponentFixture<EditarPropietario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarPropietario],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarPropietario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
