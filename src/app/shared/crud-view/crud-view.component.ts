import {Component, Input, OnInit} from '@angular/core';
import {Button} from "primeng/button";
import {DividerModule} from "primeng/divider";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {PrimeTemplate} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {NotificationService} from "../../core/services/notification.service";
import {BaseCrud} from "../base-crud/base-crud";
import {CommonModule} from "@angular/common";
import {BaseEntity} from "../../core/models/base-entity";

@Component({
    selector: 'crud-view',
    standalone: true,
    imports: [
        CommonModule,
        Button,
        DividerModule,
        RouterLink,
        ConfirmDialogModule,
        PrimeTemplate,
        ToastModule,
    ],
    templateUrl: './crud-view.component.html',
    styleUrl: './crud-view.component.scss'
})
export class CrudViewComponent<T extends BaseEntity> implements OnInit {

    @Input()
    listTitle!: string;

    @Input()
    editTitle!: string;

    routes: string[] = [];

    isEditMode: boolean = false;
    isListMode: boolean = false;
    isCreateMode: boolean = false;

    baseCrud!: BaseCrud<T>;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private notificationService: NotificationService) {
    }

    ngOnInit(): void {
        const path = this.route.snapshot.routeConfig?.path as string;
        this.routes = path?.split('/') as string[];

        if (this.routes.length > 0) {
            if (this.routes.some(route => route === ":id")) {
                this.isEditMode = true;
            } else if (this.routes.some(route => route === "cadastro")) {
                this.isCreateMode = true;
            } else {
                this.isListMode = true;
            }
        }
    }

    setBaseCrud(parent: any): void {
        this.baseCrud = parent;
    }

    return(): void {
        if (this.routes.some(route => route === ':id')) {
            this.router.navigate(['../../'], {relativeTo: this.route}).then();
        } else if (this.routes.some(route => route === 'cadastro')) {
            this.router.navigate(['../'], {relativeTo: this.route}).then();
        } else {
            this.router.navigate(['/home'], {relativeTo: this.route}).then();
        }
    }

    cancelDelete(event: MouseEvent): void {
        this.notificationService.closeDialog();
    }

    confirmDelete(event: MouseEvent): void {
        this.baseCrud.delete();
    }

    onDeleteClick(event: Event): void {
        this.notificationService.showConfirm(event);
    }

    onSaveClick(event: Event): void {
        this.baseCrud.save();
    }

}
