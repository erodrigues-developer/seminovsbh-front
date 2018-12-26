import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { VALORDE, VALORATE } from 'src/app/mock-valor';
import { ANODE, ANOATE } from 'src/app/mock-ano';

@Injectable({
  providedIn: 'root'
})
export class BuscaService {

  constructor(
    private http : HttpClient,
  ) { }


  /** GET Marcas from the server */
  getMarcas () {

  const URI_marca = '/marca';
  const URLMarca = environment.apiURL + URI_marca;

  return this.http.get(URLMarca)
    .pipe(
      tap(data => this.log('fetched Marcas')),
      catchError(this.handleError('getMarcas', []))
    );
  }

  /** GET Modelos from the server */
  getModelos (idMarca) {

    const URLModelos = "https://www.seminovosbh.com.br/json/modelos/buscamodelo/marca/" + idMarca + "/data.js?v3.44.5-bkv";
    
    return this.http.get(URLModelos)
      .pipe(
        tap(data => this.log('fetched Modelos')),
        catchError(this.handleError('getModelos', []))
      );
  }

    /** GET Cidades from the server */
    getCidades (idMarca, idModelo) {

      const URLCidades = "https://www.seminovosbh.com.br/json/index/busca-cidades/veiculo/1/marca/" + idMarca + "/modelo/" + idModelo + "/cidade/0/data.js?v3.44.5-bkw";
      
      return this.http.get(URLCidades)
        .pipe(
          tap(data => this.log('fetched Cidades')),
          catchError(this.handleError('getCidades', []))
        );
    }

    /** GET AnoDe from the mock */
    getAnoDe () {
      return ANODE;
    }

    /** GET AnoAte from the mock */
    getAnoAte () {
      return ANOATE;
    }

    /** GET ValorDe from the mock */
    getValorDe() {
      return VALORDE;
    }

    /** GET ValorAte from the mock */
    getValorAte () {
      return VALORATE;
    }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(`BuscaService: ${message}`);
  }
}
