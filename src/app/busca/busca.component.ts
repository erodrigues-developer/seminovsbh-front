import { Component, OnInit } from '@angular/core';
import { BuscaService } from '../busca.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  public marcas;
  public modelos;
  public cidades;
  public valorDe;
  public valorAte;
  public anoDe;
  public anoAte;

  public idMarcaSelecionada = 0;
  public nomeMarcaSelecionada = 0;
  public idModeloSelecionado = 0;
  public idCidadeSelecionada = 0;
  public valorDeSelecionado = 0;
  public valorAteSelecionado = 0;
  public anoDeSelecionado = 0;
  public anoAteSelecionado = 0;
  public pagina = 1;

  public invalido = true;

  constructor(
    private serviceBusca : BuscaService,
    private rota : Router,
  ) 
  { }
  
  ngOnInit() {
    this.getMarcas();
    this.getCidades();
    this.getAnoDe();
    this.getAnoAte();
    this.getValorDe();
    this.getValorAte();
  }

  /**
   * Método executado ao clicar no botão buscar
   */
  buscar() {
    
    if (!this.validacaoBusca()) {
      return;
    }

    const URIBusca = `resultado/${this.nomeMarcaSelecionada}/${this.idModeloSelecionado}/${this.idCidadeSelecionada}/${this.valorDeSelecionado}/${this.valorAteSelecionado}/${this.anoDeSelecionado}/${this.anoAteSelecionado}/1`;
    console.log(URIBusca);
    this.rota.navigate([URIBusca]);
  }

  /**
   * Método responsável por verificar se já existem os parâmetros necessários
   * para busca
   */
  validacaoBusca(): Boolean {
    
    let count = 0;

    if (this.idMarcaSelecionada != 0) {
      count++;
    }
    if (this.idModeloSelecionado != 0) {
      count++;
    }
    if (this.idCidadeSelecionada != 0) {
      count++;
    }
    if (this.valorDeSelecionado != 0) {
      count++;
    }
    if (this.valorAteSelecionado != 0) {
      count++;
    }
    if (this.anoDeSelecionado != 0) {
      count++;
    }
    if (this.anoAteSelecionado != 0) {
      count++;
    }

    // A busca precisa de no mínimo 2 parâmetros válidos
    if (count < 2) {
      this.invalido = true;
      return false
    }

    this.invalido = false;
    return true;
  }

  /**
   * Método responsável por buscar o array de marcas no service
   */
  getMarcas() {
    this.serviceBusca.getMarcas()
    .subscribe(marca => {
      this.marcas = marca;
      let marcaFormatada = [];

      // Coloca o array retornado no formato válido para o componente p-dropdown
      for (var i = 0; i < this.marcas.length; i++) {
        marcaFormatada.push({
          value: this.marcas[i]['codigo'],
          label: this.marcas[i]['marca']
        })
      }

      this.marcas = marcaFormatada;
    });
  }

  /**
   * Método responsável por buscar o array de modelos no service
   */
  getModelos(element) {

    this.nomeMarcaSelecionada = element.selectedOption.label;

    this.serviceBusca.getModelos(this.idMarcaSelecionada)
    .subscribe(modelo => {
      this.modelos = modelo;
      let modeloFormatada = [];

      // Coloca o array retornado no formato válido para o componente p-dropdown
      for (var i = 0; i < this.modelos.length; i++) {
        modeloFormatada.push({
          value: this.modelos[i]['idModelo'],
          label: this.modelos[i]['modelo']
        })
      }

      this.modelos = modeloFormatada;
      this.getCidades();
    });
  }

  /**
   * Método responsável por buscar o array de cidade no service
   */
  getCidades() {
    this.serviceBusca.getCidades(this.idMarcaSelecionada, this.idModeloSelecionado)
    .subscribe(cidade => {
      this.cidades = cidade;
      let cidadeFormatada = [];

      // Coloca o array retornado no formato válido para o componente p-dropdown
      for (var i = 0; i < this.cidades.length; i++) {
        cidadeFormatada.push({
          value: this.cidades[i]['cod_cidades'],
          label: this.cidades[i]['nome']
        })
      }

      this.cidades = cidadeFormatada;
    });
  }

  /**
   * Método responsável por buscar o array de anosDe no service
   */
  getAnoDe() {
    this.anoDe = this.serviceBusca.getAnoDe();
  }

  /**
   * Método responsável por buscar o array de anoAte no service
   */
  getAnoAte() {
    this.anoAte = this.serviceBusca.getAnoAte();
  }

  /**
   * Método responsável por buscar o array de valorDe no service
   */
  getValorDe() {
    this.valorDe = this.serviceBusca.getValorDe();
  }

  /**
   * Método responsável por buscar o array de valorAte no service
   */
  getValorAte() {
    this.valorAte = this.serviceBusca.getValorAte();
  }

}
