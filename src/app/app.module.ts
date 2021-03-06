import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// rutas
import { APP__MAIN_ROUTES } from './app.routes';

// modulos

import { PagesModule } from './pages/pages.module';


// componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { PagesComponent } from './pages/pages.component';
import { IncrementadorComponent } from './components/incrementador/incrementador.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
    // ProgressComponent,
    // NopagefoundComponent
    // DashboardComponent,
    // ProgressComponent,
    // Graficas1Component,
    // PagesComponent,

    // HeaderComponent,
    // SidebarComponent,
    // BreadcrumbsComponent,
  ],
  imports: [
    BrowserModule,
    APP__MAIN_ROUTES,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
