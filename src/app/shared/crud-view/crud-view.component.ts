import {Component, Input, OnInit} from '@angular/core';
import {Button} from "primeng/button";
import {DividerModule} from "primeng/divider";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {PrimeTemplate} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {NotificationService} from "../../core/services/notification.service";
import {BaseCrud} from "../base-component/base-crud";
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
    title!: string;

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
            if (this.routes.some(route => route === "cadastro")) {
                this.isCreateMode = true;
            } else if (this.routes.some(route => route === ":id")) {
                this.isEditMode = true;
            } else {
                this.isListMode = true;
            }
        }
    }

    setBaseCrud(parent: any): void {
        this.baseCrud = parent;
    }

    return() {
        if (this.routes.some(route => route === ':id')) {
            this.router.navigate(['../../'], {relativeTo: this.route}).then();
        } else {
            this.router.navigate(['../'], {relativeTo: this.route}).then();
        }
    }

    cancelar($event: MouseEvent) {
        this.notificationService.closeDialog();
    }

    confirmar($event: MouseEvent): void {
        this.baseCrud.excluir();
    }

    onDeleteClick(event: Event): void {
        this.notificationService.showConfirm(event);
    }


}
