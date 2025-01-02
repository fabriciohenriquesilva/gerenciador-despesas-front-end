import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Router, RouterModule} from "@angular/router";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Controle Financeiro';

    isLoginPage: boolean = false;

    constructor(private router: Router) {
        this.router.events.subscribe(() => {
            this.isLoginPage = this.router.url === '/auth/login';
        });
    }

}
