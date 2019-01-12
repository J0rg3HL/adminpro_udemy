import { Routes, RouterModule } from '@angular/router';



import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';



const routes: Routes = [
    { path: '', component: PagesComponent,
    children : [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'progress', component: ProgressComponent },
        { path: 'incrementador', component: IncrementadorComponent },
        { path: 'graficas1', component: Graficas1Component },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
               ]
    }

];

export const RUTAS_LEVEL2 = RouterModule.forChild( routes ) ;
