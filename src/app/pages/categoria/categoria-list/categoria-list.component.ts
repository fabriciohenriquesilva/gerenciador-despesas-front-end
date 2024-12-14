import {Component, OnInit} from '@angular/core';
import {Page} from "../../../core/models/page";
import {CategoriaService} from "../categoria.service";
import {Router, RouterLink} from "@angular/router";
import {Categoria} from "../categoria";
import {TableModule} from "primeng/table";
import {NgIf} from "@angular/common";
import {Button} from "primeng/button";
import {DividerModule} from "primeng/divider";
import {PaginatorModule} from "primeng/paginator";

@Component({
    selector: 'app-categoria-list',
    templateUrl: './categoria-list.component.html',
    styleUrls: ['./categoria-list.component.scss'],
    standalone: true,
    imports: [
        TableModule,
        RouterLink,
        NgIf,
        Button,
        DividerModule,
        PaginatorModule
    ]
})
export class CategoriaListComponent implements OnInit {

    page!: Page<Categoria>;
    categorias!: Categoria[];

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

    onPageChange(event: any): void {
        this._service.getPage(event.page)
            .subscribe(page => {
                this.atualizarDadosNaPagina(page);
            });
    }

    private atualizarDadosNaPagina(page: Page<Categoria>): void {
        this.page = page;
        this.categorias = page.content;
    }
}
