import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarPropietario } from './insertar-propietario';

describe('InsertarPropietario', () => {
  let component: InsertarPropietario;
  let fixture: ComponentFixture<InsertarPropietario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertarPropietario],
    }).compileComponents();

    fixture = TestBed.createComponent(InsertarPropietario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
