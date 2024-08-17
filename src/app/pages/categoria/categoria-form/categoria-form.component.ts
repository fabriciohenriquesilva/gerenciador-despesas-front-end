import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Categoria} from "../categoria";
import {CategoriaService} from "../categoria.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-categoria-form',
    templateUrl: './categoria-form.component.html',
    styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent implements OnInit {

    formulario!: FormGroup;
    categoria!: Categoria;
    categorias: Categoria[] = [];

    title!: string;
    action!: string;

    constructor(private _formBuilder: FormBuilder,
                private _service: CategoriaService,
                private _router: Router,
                private _route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this._route.data.subscribe((data) => {
            if (data['categoria']) {
                this.categoria = data['categoria'];
                this.preencherForm(this.categoria);
            } else {
                this.formulario = this.criarForm();
            }
        });

        this.title = this._route.snapshot.data[0]['title'];
        this.action = this._route.snapshot.data[0]['action'];
    }

    private criarForm(): FormGroup {
        return this._formBuilder.group({
            nome: ['', Validators.required]
        });
    }

    private preencherForm(categoria: Categoria) {
        this.formulario = this._formBuilder.group({
            id: [categoria.id, Validators.required],
            nome: [categoria.nome, Validators.required]
        });
    }

    salvar() {
        this._service.save(this.formulario.value)
            .subscribe(() => {
                this._router.navigate(['categorias']);
            });
    }

    excluir(id: number) {
        return this._service.remove(id)
            .subscribe(() => {
                this._router.navigate(['categorias']);
            });
    }

    search(event: any) {
        console.log(event)

        // this._service.getAll(event.query).then(data => {
        //     this.results = data;
        // });
    }
}
