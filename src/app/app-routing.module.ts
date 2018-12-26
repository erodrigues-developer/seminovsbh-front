import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscaComponent } from './busca/busca.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: BuscaComponent },
  { 
    path: 'resultado/:marca/:idModelo/:idCidade/:valorDe/:valorAte/:anoDe/:anoAte/:pagina', 
    component: ResultadoComponent 
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
