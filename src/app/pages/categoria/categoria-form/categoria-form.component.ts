import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Categoria} from "../categoria";
import {CategoriaService} from "../categoria.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Button} from "primeng/button";
import {DividerModule} from "primeng/divider";
import {CommonModule} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";
import {AutoCompleteModule} from "primeng/autocomplete";
import {InputNumberModule} from "primeng/inputnumber";
import {NotificationService} from "../../../core/services/notification.service";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";

@Component({
    selector: 'app-categoria-form',
    standalone: true,
    templateUrl: './categoria-form.component.html',
    styleUrls: ['./categoria-form.component.scss'],
    imports: [
        CommonModule,
        Button,
        RouterLink,
        DividerModule,
        ReactiveFormsModule,
        InputTextModule,
        AutoCompleteModule,
        InputNumberModule,
        ToastModule,
        ConfirmDialogModule,
    ],
    providers: [NotificationService]
})
export class CategoriaFormComponent implements OnInit {

    formulario!: FormGroup;
    categoria!: Categoria;
    categorias: Categoria[] = [];
    filteredCategorias: Categoria[] = [];

    title!: string;

    private notificationService: NotificationService = inject(NotificationService);

    constructor(private formBuilder: FormBuilder,
                private service: CategoriaService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.data.subscribe((data) => {
            if (data['categoria']) {
                this.categoria = data['categoria'];
                this.preencherForm(this.categoria);
            } else {
                this.formulario = this.criarForm();
            }
        });

        this.service.getAll().subscribe(data => {
            this.categorias = data.content;
        });

    }

    private criarForm(): FormGroup {
        return this.formBuilder.group({
            id: [],
            nome: ['', Validators.required],
            pai: ['']
        });
    }

    private preencherForm(categoria: Categoria): void {
        this.formulario = this.formBuilder.group({
            id: [categoria.id, Validators.required],
            nome: [categoria.nome, Validators.required],
            pai: [categoria.pai]
        });
    }

    salvar() {
        return this.service.save(this.formulario.value)
            .subscribe({
                next: (data: any) => {
                    const timeout = 2500;
                    this.notificationService.showSuccess('Registro excluído com sucesso', timeout);

                    // TODO futuramente abstrair lógica para outro componente de encapsulamento
                    this.router.navigate(['categorias']).then();
                    setTimeout(() => {
                        this.router.navigate(['categorias']).then();
                    }, timeout);
                },
                error: (err: any) => {
                    this.notificationService.showError(`Erro ao salvar registro: ${err}`);
                    console.error(err);
                }
            });
    }

    private excluir() {
        return this.service.remove(this.categoria.id)
            .subscribe({
                next: (data: any) => {
                    const timeout = 2500;
                    this.notificationService.showSuccess('Registro excluído com sucesso', timeout);
                    setTimeout(() => {
                        this.router.navigate(['categorias']).then();
                    }, timeout);
                },
                error: (err: any) => {
                    this.notificationService.showError(`Erro ao realizar exclusão: ${err}`);
                    console.error(err);
                }
            });
    }

    search(event: any): void {
        this.filteredCategorias = this.categorias.filter(c => c.nome.toLowerCase().includes(event.query.toLowerCase()));
    }

    cancelar($event: MouseEvent) {
        this.notificationService.closeDialog();
    }

    confirmar($event: MouseEvent): void {
        this.excluir();
    }

    onDeleteClick(event: Event): void {
        this.notificationService.showConfirm(event);
    }

}
