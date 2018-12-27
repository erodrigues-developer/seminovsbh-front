import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultadoService } from '../resultado.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  private resultados;

  public nomeMarcaParam;
  public idModeloParam;
  public idCidadeParam;
  public valorDeParam;
  public valorAteParam;
  public anoDeParam;
  public anoAteParam;
  public pagina;

  public carregando: Boolean = true;

  constructor(
    private rota : ActivatedRoute,
    private serviceResultado : ResultadoService
  ) { }

  ngOnInit() {
    this.getParams();
    this.getResultados();
  }

  private getParams() {
    this.nomeMarcaParam = this.rota.snapshot.paramMap.get('marca');
    this.idModeloParam = this.rota.snapshot.paramMap.get('idModelo');
    this.idCidadeParam = this.rota.snapshot.paramMap.get('idCidade');
    this.valorDeParam = this.rota.snapshot.paramMap.get('valorDe');
    this.valorAteParam = this.rota.snapshot.paramMap.get('valorAte');
    this.anoDeParam = this.rota.snapshot.paramMap.get('anoDe');
    this.anoAteParam = this.rota.snapshot.paramMap.get('anoAte');
    this.pagina = this.rota.snapshot.paramMap.get('pagina');
  }

  /**
   * Método responsável por buscar o array de resultados no service
   */
  getResultados() {
    this.serviceResultado.getResultados(
      this.nomeMarcaParam,
      this.idModeloParam,
      this.idCidadeParam,
      this.valorDeParam,
      this.valorAteParam,
      this.anoDeParam,
      this.anoAteParam,
      this.pagina
    )
    .subscribe(resultado => {
      this.resultados = resultado;
      this.carregando = false;
    });
  }
}
