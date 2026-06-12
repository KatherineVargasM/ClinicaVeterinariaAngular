import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { PropietariosService } from '../services/propietarios.service';
import { Propietario } from '../interfaces/propietario';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-propietarios',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './propietarios.html',
  styleUrl: './propietarios.css',
})
export class Propietarios implements OnInit {
  lista: Propietario[] = [];
  private readonly propietariosServicio = inject(PropietariosService);
  private readonly cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.cargarDatos();
  }
  
  cargarDatos(): void {
    this.propietariosServicio.todos().subscribe({
      next: (propietarios) => {
        this.lista = propietarios;
        this.cdr.detectChanges();
        console.log('Lista cargada:', this.lista);
      },
      error: (err) => {
        console.error('Error al cargar propietarios:', err);
      }
    });
  }
}