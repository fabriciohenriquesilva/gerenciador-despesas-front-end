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

    private loadData() {
        this._service.search().subscribe((data) => {
            this.page = data;
            this.subcategorias = data.content;
        });
    }

    excluir(id: number) {
        return this._service.remove(id).subscribe(() => this.loadData());
    }

}
