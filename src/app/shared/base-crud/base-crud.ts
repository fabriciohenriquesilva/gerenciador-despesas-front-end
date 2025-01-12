import {CrudViewComponent} from "../crud-view/crud-view.component";
import {AfterContentInit, Component, inject, OnInit, ViewChild} from "@angular/core";
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
export abstract class BaseCrud<T extends BaseEntity> implements OnInit, AfterContentInit {

    @ViewChild(CrudViewComponent, {static: true})
    crudViewComponent!: CrudViewComponent<T>;

    formulario!: FormGroup;
    tableData!: T[];
    page!: Page<T>;

    isEditMode: boolean = false;
    isListMode: boolean = false;
    isCreateMode: boolean = false;

    abstract getService(): RestService<T>;

    protected activatedRoute = inject(ActivatedRoute);
    protected router = inject(Router);
    protected formBuilder = inject(FormBuilder);
    protected notificationService = inject(NotificationService);

    ngOnInit(): void {
    }

    ngAfterContentInit(): void {
        this.crudViewComponent.setBaseCrud(this);

        setTimeout(() => {
            this.isEditMode = this.crudViewComponent.isEditMode;
            this.isListMode = this.crudViewComponent.isListMode;
            this.isCreateMode = this.crudViewComponent.isCreateMode;
        }, 50);
    }

    save() {
        return this.getService().save(this.formulario.getRawValue())
            .subscribe({
                next: (data: any) => {
                    console.log(data)
                    const timeout = 2500;
                    this.notificationService.showSuccess('Registro salvo com sucesso', timeout);
                    // this.crudViewComponent.return();
                },
                error: (err: any) => {
                    this.notificationService.showError(`Erro ao salvar registro: ${err}`);
                    console.error(err);
                }
            });
    }

    delete() {
        const id: number = this.formulario.getRawValue().id;

        return this.getService().remove(id)
            .subscribe({
                next: (data: any) => {
                    const timeout = 2500;
                    this.notificationService.showSuccess('Registro excluído com sucesso', timeout);
                    this.crudViewComponent.return();
                },
                error: (err: any) => {
                    this.notificationService.showError(`Erro ao realizar exclusão: ${err}`);
                    console.error(err);
                }
            });
    }

    onPageChange(event: any): void {
        this.getService().getPage(event.page)
            .subscribe(page => {
                this.refreshPageData(page);
            });
    }

    private refreshPageData(page: Page<T>): void {
        this.page = page;
        this.tableData = page.content;
    }

    // TODO implement on future
    report() {
        throw new Error('Not implemented yet');
    }

    clearForm(): void {
        this.formulario.reset();
    }

    abstract initForm(): void;

    abstract updateForm(entity: T): void

}
