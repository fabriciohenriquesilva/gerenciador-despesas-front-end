import { Component, OnInit } from '@angular/core';
import { Page } from '../../Page';
import { Despesa } from '../Despesa';
import { DespesaService } from '../despesa.service';

@Component({
  selector: 'app-listar-despesas',
  templateUrl: './listar-despesas.component.html',
  styleUrls: ['./listar-despesas.component.css']
})
export class ListarDespesasComponent implements OnInit {

  pessoas: Despesa[] = [];
  page!: Page<Despesa>;

  constructor(private despesaService: DespesaService) { }

  ngOnInit(): void {
    this.despesaService.listar()
      .subscribe((response) => {
        this.page = response;
      });
  }

  trocarPagina(pagina: number) {
    this.despesaService.listar(pagina)
      .subscribe( response => {
        this.page = response;
      });
  }

}
