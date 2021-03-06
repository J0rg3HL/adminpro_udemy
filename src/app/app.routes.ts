import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';

// logeo
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


const routes: Routes = [
    // { path: '', component: PagesComponent,
    // children : [
    //     { path: 'dashboard', component: DashboardComponent },
    //     { path: 'progress', component: ProgressComponent },
    //     { path: 'graficas1', component: Graficas1Component },
    //     { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    //            ]
    // },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component : NopagefoundComponent}
                    ];

// @NgModule({
//     imports: [RouterModule.forChild(routes)],
//     exports: [RouterModule]
// })

export const APP__MAIN_ROUTES  = RouterModule.forRoot(routes, {useHash: true});
