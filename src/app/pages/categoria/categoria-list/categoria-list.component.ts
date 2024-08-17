import {Component, OnInit} from '@angular/core';
import {Page} from "../../../core/models/page";
import {CategoriaService} from "../categoria.service";
import {Router} from "@angular/router";
import {Categoria} from "../categoria";

@Component({
    selector: 'app-categoria-list',
    templateUrl: './categoria-list.component.html',
    styleUrls: ['./categoria-list.component.scss']
})
export class CategoriaListComponent implements OnInit {

    page!: Page<Categoria>;
    categorias!: Categoria[];
    selectedItems!: Categoria[];

    constructor(private _service: CategoriaService,
                private _router: Router) {
    }

    ngOnInit(): void {
        this.loadData();
    }

    private loadData(): void {
        this._service.getAll().subscribe((page) => {
            this.atualizarDadosNaPagina(page);
        });
    }

    excluir(id: number) {
        return this._service.remove(id).subscribe(() => this.loadData());
    }

    trocarPagina(pagina: number): void {
        this._service.getPage(pagina)
            .subscribe(page => {
                this.atualizarDadosNaPagina(page);
            });
    }

    private atualizarDadosNaPagina(page: Page<Categoria>): void {
        this.page = page;
        this.categorias = page.content;
    }

}
