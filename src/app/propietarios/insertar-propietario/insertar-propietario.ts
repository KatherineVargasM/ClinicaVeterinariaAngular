import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PropietariosService } from '../../services/propietarios.service';
import { Propietario } from '../../interfaces/propietario';

@Component({
  selector: 'app-insertar-propietario',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './insertar-propietario.html',
  styleUrl: './insertar-propietario.css'
})
export class InsertarPropietario {
  formulario: FormGroup;
  private readonly propietariosServicio = inject(PropietariosService);
  private readonly router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      direccion: ['', Validators.required]
    });
  }

  guardar() {
    if (this.formulario.valid) {
      const nuevoPropietario: Propietario = this.formulario.value;
      
      this.propietariosServicio.insertar(nuevoPropietario).subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (er) => {
          console.log(er);
        }
      });
    }
  }
}