import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {

  constructor(
    private http : HttpClient,
  ) { }

  /** GET Resultados from the server */
  getResultados (
    marca,
    idModelo,
    idCidade,
    valorDe,
    valorAte,
    anoDe,
    anoAte,
    pagina
  ) {

    const URIResultados = `/busca?marca=${marca}&modelo=${idModelo}&cidade=${idCidade}&valorDe=${valorDe}&valorAte=${valorAte}&anoDe=${anoDe}&anoAte=${anoAte}&pagina=${pagina}`;
    const URLResultados = environment.apiURL + URIResultados;
    console.log(URLResultados);
    return this.http.get(URLResultados)
      .pipe(
        tap(data => this.log('fetched Resultados')),
        catchError(this.handleError('getResultados', []))
      );
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
