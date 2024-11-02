import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'home',
        loadComponent: ()=> import('./dashboard/dashboard.component').then(c=>c.DashboardComponent),
    }
];
