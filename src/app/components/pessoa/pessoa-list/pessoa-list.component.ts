import {Component, OnInit} from '@angular/core';
import {Page} from "../../Page";
import {Pessoa} from "../pessoa";
import {PessoaService} from "../pessoa.service";

@Component({
    selector: 'app-pessoa-list',
    templateUrl: './pessoa-list.component.html',
    styleUrls: ['./pessoa-list.component.scss']
})
export class PessoaListComponent implements OnInit {

    page!: Page<Pessoa>;
    pessoas!: Pessoa[];

    constructor(private _service: PessoaService) {
    }

    ngOnInit(): void {
        this.loadData();
    }

    private loadData() {
        this._service.getAll().subscribe((data) => {
            this.page = data;
            this.pessoas = data.content;
        });
    }

    trocarPagina(pagina: number): void {
        this._service.getPage(pagina)
            .subscribe(page => {
                this.atualizarDadosNaPagina(page);
            });
    }

    private atualizarDadosNaPagina(page: Page<Pessoa>): void {
        this.page = page;
        this.pessoas = page.content;
    }

}
