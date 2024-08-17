import { Component, OnInit } from '@angular/core';
import {Page} from "../../../core/models/page";
import {Despesa} from "../despesa";
import {DespesaService} from "../despesa.service";

@Component({
  selector: 'app-despesa-list',
  templateUrl: './despesa-list.component.html',
  styleUrls: ['./despesa-list.component.scss']
})
export class DespesaListComponent implements OnInit {

    page!: Page<Despesa>;
    despesas!: Despesa[];
    selectedItems!: Despesa[];

    constructor(private _service: DespesaService) {
    }

    ngOnInit(): void {
        this.loadData();
    }

    private loadData() {
        this._service.getAll().subscribe((data) => {
            this.page = data;
            this.despesas = data.content;
        });
    }

    trocarPagina(pagina: number): void {
        this._service.getPage(pagina)
            .subscribe(page => {
                this.atualizarDadosNaPagina(page);
            });
    }

    private atualizarDadosNaPagina(page: Page<Despesa>): void {
        this.page = page;
        this.despesas = page.content;
    }

}
