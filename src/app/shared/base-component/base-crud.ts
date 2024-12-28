import {CrudViewComponent} from "../crud-view/crud-view.component";
import {Component, inject, OnInit, ViewChild} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {RestService} from "../../core/services/rest.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {NotificationService} from "../../core/services/notification.service";
import {Page} from "../../core/models/page";
import {ButtonModule} from "primeng/button";
import {TitleCasePipe} from "@angular/common";
import {BaseEntity} from "../../core/models/base-entity";

@Component({
    selector: 'crud',
    standalone: true,
    imports: [ButtonModule, RouterLink, TitleCasePipe],
    template: '<>',
})
export abstract class BaseCrud<T extends BaseEntity> implements OnInit {

    @ViewChild(CrudViewComponent, {static: true})
    crudViewComponent!: CrudViewComponent<T>;

    formulario!: FormGroup;
    tableData!: T[];
    page!: Page<T>;

    abstract getService(): RestService<T>;

    protected activatedRoute = inject(ActivatedRoute);
    protected router = inject(Router);
    protected formBuilder = inject(FormBuilder);
    protected notificationService = inject(NotificationService);

    ngOnInit(): void {
    }

    ngAfterContentInit(): void {
        this.crudViewComponent.setBaseCrud(this);
    }

    return() {
        if (this.crudViewComponent.routes.some(route => route === ':id')) {
            this.router.navigate(['../../'], {relativeTo: this.activatedRoute});
        } else {
            this.router.navigate(['../'], {relativeTo: this.activatedRoute});
        }
    }

    create() {
        this.router.navigate(['./create'], {relativeTo: this.activatedRoute})
    }

    getById(entity: T) {
        const id = entity.id!;
        this.getService().getById(id)
            .subscribe(data => console.log(data));
    }

    // search() {
        // this.getService().list()
        //     .subscribe(data => {
        //         this.tableData = data;
        //     })
    // }

    salvar() {
        return this.getService().save(this.formulario.value)
            .subscribe({
                next: (data: any) => {
                    const timeout = 2500;
                    this.notificationService.showSuccess('Registro excluído com sucesso', timeout);

                    // TODO futuramente abstrair lógica para outro componente de encapsulamento
                    this.crudViewComponent.return();
                    // this.router.navigate(['categorias']).then();
                    // setTimeout(() => {
                    //     this.router.navigate(['categorias']).then();
                    // }, timeout);
                },
                error: (err: any) => {
                    this.notificationService.showError(`Erro ao salvar registro: ${err}`);
                    console.error(err);
                }
            });
    }

    excluir() {
        return this.getService().remove(this.formulario.value.id)
            .subscribe({
                next: (data: any) => {
                    const timeout = 2500;
                    this.notificationService.showSuccess('Registro excluído com sucesso', timeout);
                    this.crudViewComponent.return();
                    // setTimeout(() => {
                    //     this.router.navigate(['categorias']).then();
                    // }, timeout);
                },
                error: (err: any) => {
                    this.notificationService.showError(`Erro ao realizar exclusão: ${err}`);
                    console.error(err);
                }
            });
    }

    // search(event: any): void {
    //     this.filteredCategorias = this.categorias.filter(c => c.nome.toLowerCase().includes(event.query.toLowerCase()));
    // }

    // excluir() {
    //     return this.getService().remove(this.formulario.value.id).subscribe(() => this.loadData());
    // }

    onPageChange(event: any): void {
        this.getService().getPage(event.page)
            .subscribe(page => {
                this.atualizarDadosNaPagina(page);
            });
    }

    private atualizarDadosNaPagina(page: Page<T>): void {
        this.page = page;
        this.tableData = page.content;
    }

    report() {

    }

    clearForm() {
        this.formulario.reset();
    }

    initForm(): void {

    }

    updateForm(entity: T): void {

    }

}
