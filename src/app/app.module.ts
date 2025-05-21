import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FormularioInicialComponent } from './components/formulario-inicial/formulario-inicial.component';
import { PanoramaTecnologicoComponent } from './components/panorama-tecnologico/panorama-tecnologico.component';
import { ReporteEjecutivoComponent } from './components/reporte-ejecutivo/reporte-ejecutivo.component';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { TemaTecnologicoComponent } from './components/tema-tecnologico/tema-tecnologico.component';
import { ClasificacionEstrategicaComponent } from './components/clasificacion-estrategica/clasificacion-estrategica.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { LucideAngularModule, icons } from 'lucide-angular';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FormularioInicialComponent,
    PanoramaTecnologicoComponent,
    ReporteEjecutivoComponent,
    LoadingIndicatorComponent,
    TemaTecnologicoComponent,
    ClasificacionEstrategicaComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: FormularioInicialComponent },
      { path: 'panorama', component: PanoramaTecnologicoComponent },
      { path: 'reporte', component: ReporteEjecutivoComponent }
    ]),
    LucideAngularModule.pick(icons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }