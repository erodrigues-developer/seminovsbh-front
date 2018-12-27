import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BuscaComponent } from './busca/busca.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { BuscaService } from './busca.service';
import { ResultadoService } from './resultado.service';

import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [
    AppComponent,
    BuscaComponent,
    ResultadoComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DropdownModule,
    PanelModule,
    ButtonModule,
    DataViewModule,
    ProgressSpinnerModule,
  ],
  providers: [
    BuscaService,
    ResultadoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
