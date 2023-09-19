import {Component, OnInit} from '@angular/core';
import {Subcategoria} from "../subcategoria";
import {Page} from "../../Page";
import {SubcategoriaService} from "../subcategoria.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-subcategoria-list',
    templateUrl: './subcategoria-list.component.html',
    styleUrls: ['./subcategoria-list.component.scss']
})
export class SubcategoriaListComponent implements OnInit {

    page!: Page<Subcategoria>;
    subcategorias!: Subcategoria[];

    constructor(private _service: SubcategoriaService,
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

    private atualizarDadosNaPagina(page: Page<Subcategoria>): void {
        this.page = page;
        this.subcategorias = page.content;
    }

}
