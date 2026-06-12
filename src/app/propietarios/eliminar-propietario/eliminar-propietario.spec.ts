import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPropietario } from './eliminar-propietario';

describe('EliminarPropietario', () => {
  let component: EliminarPropietario;
  let fixture: ComponentFixture<EliminarPropietario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarPropietario],
    }).compileComponents();

    fixture = TestBed.createComponent(EliminarPropietario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
