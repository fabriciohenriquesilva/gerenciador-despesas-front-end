import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Page} from '../../../core/models/page';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.css']
})
export class PaginationComponent<T> implements OnInit {

    @Input()
    page!: Page<T>;

    @Output() eventEmitter: EventEmitter<number> = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit(): void {
    }

    trocarPagina(pagina: number) {
        this.eventEmitter.emit(pagina);
    }

}
