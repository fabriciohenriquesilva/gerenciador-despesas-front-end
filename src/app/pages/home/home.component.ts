import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable, take} from 'rxjs';
import {AsyncPipe, NgStyle} from '@angular/common';
import {DividerModule} from "primeng/divider";
import {PanelModule} from "primeng/panel";
import {CardModule} from "primeng/card";
import {CardComponent} from "../../shared/card/card.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [RouterLink, HttpClientModule, AsyncPipe, DividerModule, PanelModule, CardModule, NgStyle, CardComponent]
})
export class HomeComponent {

    private http = inject(HttpClient);

    menu: Observable<any>;

    constructor() {
        this.menu = this.http.get('./assets/configs/menu.json').pipe(take(1));
    }

}
