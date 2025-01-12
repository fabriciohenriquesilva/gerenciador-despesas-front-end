import {Component} from '@angular/core';
import {CrudViewComponent} from "../../../shared/crud-view/crud-view.component";
import {Button} from "primeng/button";
import {CommonModule, CurrencyPipe, DatePipe, KeyValuePipe, NgIf} from "@angular/common";
import {PaginatorModule} from "primeng/paginator";
import {PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";
import {MovimentoFinanceiro} from "../models/movimento-financeiro";
import {MovimentoFinanceiroService} from "../movimento-financeiro.service";
import {RouterLink} from "@angular/router";
import {AutoCompleteModule} from "primeng/autocomplete";
import {InputTextModule} from "primeng/inputtext";
import {ReactiveFormsModule, Validators} from "@angular/forms";
import {Categoria} from "../../categoria/categoria";
import {BaseCrud} from "../../../shared/base-crud/base-crud";
import {CategoriaService} from "../../categoria/categoria.service";
import {TipoMovimentoFinanceiro} from "../models/tipo-movimento-financeiro";
import {CalendarModule} from "primeng/calendar";
import {Page} from "../../../core/models/page";
import {DateService} from "../../../core/services/date.service";

@Component({
    selector: 'movimento-financeiro-crud',
    standalone: true,
    imports: [
        CrudViewComponent,
        Button,
        NgIf,
        PaginatorModule,
        PrimeTemplate,
        TableModule,
        RouterLink,
        DatePipe,
        CurrencyPipe,
        KeyValuePipe,
        AutoCompleteModule,
        InputTextModule,
        ReactiveFormsModule,
        CommonModule,
        CalendarModule
    ],
    templateUrl: './movimento-financeiro-crud.component.html',
    styleUrl: './movimento-financeiro-crud.component.scss'
})
export class MovimentoFinanceiroCrudComponent extends BaseCrud<MovimentoFinanceiro> {

    movimentacoes!: MovimentoFinanceiro[];
    movimentoFinanceiro!: MovimentoFinanceiro;

    categorias: Categoria[] = [];
    filteredCategorias: Categoria[] = [];

    tipoMovimentoFinanceiroList: any = TipoMovimentoFinanceiro;

    constructor(private mainService: MovimentoFinanceiroService,
                private categoriaService: CategoriaService,
                private dateService: DateService) {
        super();

    }

    getService(): MovimentoFinanceiroService {
        return this.mainService;
    }

    filterCategorias(event: any): void {
        this.filteredCategorias = this.categorias.filter(c => c.nome.toLowerCase().includes(event.query.toLowerCase()));
    }

    override ngOnInit(): void {
        this.activatedRoute.data.subscribe((data) => {
            if (data['movimentofinanceiro']) {
                this.movimentoFinanceiro = data['movimentofinanceiro'];
                this.updateForm(this.movimentoFinanceiro);
            } else {
                this.initForm();
            }
        });

        this.mainService.getAll().subscribe(data => {
            this.page = data;
            this.movimentacoes = data.content
        });

        this.categoriaService.getAll().subscribe((data: Page<Categoria>) => {
            this.categorias = data.content;
        });

    }

    initForm(): void {
        this.formulario = this.formBuilder.group({
            id: [{value: null, disabled: true}],
            descricao: [null, Validators.required],
            valor: [null, Validators.required],
            tipoMovimentoFinanceiro: [null, Validators.required],
            data: [null, Validators.required],
            quantidadeParcelas: [null, Validators.required],
            categoria: [null, Validators.required],
        });
    }

    updateForm(movimentoFinanceiro: MovimentoFinanceiro): void {
        this.formulario = this.formBuilder.group({
            id: [{value: movimentoFinanceiro.id, disabled: true}, Validators.required],
            descricao: [movimentoFinanceiro.descricao, Validators.required],
            valor: [movimentoFinanceiro.valor],
            tipoMovimentoFinanceiro: [movimentoFinanceiro.tipoMovimentoFinanceiro],
            data: [this.dateService.createDate(movimentoFinanceiro?.data?.toString())],
            quantidadeParcelas: [movimentoFinanceiro.quantidadeParcelas],
            categoria: [movimentoFinanceiro.categoria],
        });
    }


}
