import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscaComponent } from './busca/busca.component';
import { BuscaService } from './busca.service';

import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import  {ButtonModule } from 'primeng/button';
import { ResultadoComponent } from './resultado/resultado.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
  ],
  providers: [
    BuscaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
