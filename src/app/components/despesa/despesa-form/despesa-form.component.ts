import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {Page} from "../../../core/models/page";
import {Categoria} from "../../categoria/categoria";
import {DespesaService} from "../despesa.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Despesa} from "../despesa";
import {Subcategoria} from "../../subcategoria/subcategoria";
import {CurrencyPipe} from "@angular/common";

@Component({
    selector: 'app-despesa-form',
    templateUrl: './despesa-form.component.html',
    styleUrls: ['./despesa-form.component.scss']
})
export class DespesaFormComponent implements OnInit {

    formulario!: FormGroup;
    categorias$!: Observable<Page<Categoria>>;
    subcategorias!: Subcategoria[];
    despesas!: Despesa[];
    despesa!: Despesa;
    credorNome: string = '';

    title!: string;
    action!: string;

    constructor(
        private _route: ActivatedRoute,
        private _formBuilder: FormBuilder,
        private _service: DespesaService,
        private _router: Router,
        private currencyPipe: CurrencyPipe) {
    }

    ngOnInit(): void {
        this._route.data.subscribe((data) => {
            if (data['despesa']) {
                this.despesa = data['despesa'];
                this.preencherForm(this.despesa);
                this.buscarSubcategorias(this.despesa.categoria.id);
                this.formulario.patchValue({valorGasto: this.currencyPipe.transform(this.despesa.valorGasto, 'BRL', '')});
            } else {
                this.formulario = this.initForm();
            }
        });

        this.title = this._route.snapshot.data[0]['title'];
        this.action = this._route.snapshot.data[0]['action'];

        this.buscarCategorias();
    }

    initForm() {
        return this._formBuilder.group({
            descricao: ['', Validators.compose([
                Validators.required
            ])],
            valorGasto: ['', Validators.compose([
                Validators.required
            ])],
            credor: ['', Validators.compose([
                Validators.required
            ])],
            dataDespesa: ['', Validators.compose([
                Validators.required
            ])],
            categoria: ['', Validators.compose([
                Validators.required
            ])],
            subcategoria: ['', Validators.compose([
                Validators.required
            ])]
        });
    }

    private preencherForm(despesa: Despesa) {
        this.formulario = this._formBuilder.group({
            id: [despesa.id, Validators.required],
            descricao: [despesa.descricao, Validators.required],
            valorGasto: [despesa.valorGasto, Validators.required],
            credor: [despesa.credor?.id, Validators.required],
            dataDespesa: [despesa.dataDespesa, Validators.required],
            categoria: [despesa.categoria?.id, Validators.required],
            subcategoria: [despesa.subcategoria?.id, Validators.required]
        });
    }

    cadastrar() {
        if (this.formulario.valid) {
            this._service.save(this.formulario.value).subscribe(() => {
                this._router.navigate(['despesas']);
            });
        }
    }

    buscarCategorias() {
        this.categorias$ = this._service.buscarCategorias();
    }

    buscarSubcategorias(categoriaId: number) {
        console.log(categoriaId)
        this._service.buscarSubcategorias(categoriaId).subscribe((subcategorias) => {
            this.subcategorias = subcategorias;
        });
    }

    buscarCredor(credorId: number) {
        this._service.buscarCredor(credorId).subscribe(credor => {
            this.credorNome = credor.nome;
        });
    }

    excluir(id: number) {
        return this._service.remove(id)
            .subscribe(() => {
                this._router.navigate(['despesa'])
            });
    }

}
