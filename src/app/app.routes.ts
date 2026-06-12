import { Routes } from '@angular/router';
import { Propietarios } from './propietarios/propietarios';
import { InsertarPropietario } from './propietarios/insertar-propietario/insertar-propietario';
import { EditarPropietario } from './propietarios/editar-propietario/editar-propietario';
import { EliminarPropietario } from './propietarios/eliminar-propietario/eliminar-propietario';

export const routes: Routes = [
    {
        path: '',
        component: Propietarios,
        pathMatch: "full"
    },
    {
        path: 'insertar',
        component: InsertarPropietario,
        pathMatch: "full"
    },
    {
        path: 'editar/:id',
        component: EditarPropietario,
        pathMatch: "full"
    },
    {
        path: 'eliminar/:id',
        component: EliminarPropietario,
        pathMatch: "full"
    }
];