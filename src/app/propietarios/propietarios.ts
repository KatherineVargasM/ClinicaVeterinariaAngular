import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { PropietariosService } from '../services/propietarios.service';
import { Propietario } from '../interfaces/propietario';
import { RouterLink } from '@angular/router';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = (pdfFonts as any).vfs;

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
      },
      error: (err) => {
        console.error('Error al cargar propietarios:', err);
      }
    });
  }
  imprimirPDF() {
  const cuerpoTabla = [
    ['ID', 'Nombre', 'Teléfono', 'Email', 'Dirección'],
    ...this.lista.map(p => [
      p.id,
      p.nombre,
      p.telefono,
      p.correo,
      p.direccion
    ])
  ];

  const documento: any = {
  pageOrientation: 'landscape',

  content: [
    {
      text: 'REPORTE DE PROPIETARIOS',
      style: 'titulo'
    },
    {
      table: {
        headerRows: 1,
        widths: [35, 130, 90, 190, '*'],
        body: cuerpoTabla
      },
      layout: 'lightHorizontalLines'
    }
  ],

  styles: {
    titulo: {
      fontSize: 18,
      bold: true,
      alignment: 'center',
      margin: [0,0,0,15]
    }
  },

  defaultStyle: {
    fontSize: 10
  }
};

  pdfMake.createPdf(documento).open();
}
}