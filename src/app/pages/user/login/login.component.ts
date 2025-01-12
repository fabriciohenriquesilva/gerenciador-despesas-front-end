import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextModule} from "primeng/inputtext";
import {Router} from "@angular/router";
import {PanelModule} from "primeng/panel";
import {Button} from "primeng/button";
import {UserService} from "../user.service";
import {NotificationService} from "../../../core/services/notification.service";
import {ToastModule} from "primeng/toast";
import {UserTokenDto} from "../dto/user.token.dto";

@Component({
    selector: 'login',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        InputNumberModule,
        InputTextModule,
        PanelModule,
        Button,
        ToastModule
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

    formulario!: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private router: Router,
                private userService: UserService,
                private notificationService: NotificationService) {
    }

    ngOnInit(): void {
        this.formulario = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    login() {
        return this.userService.login(this.formulario.value)
            .subscribe({
                next: (data: UserTokenDto) => {
                    const timeout = 2500;
                    this.notificationService.showSuccess("Login efetuado com sucesso!", timeout);
                    setTimeout(() => {
                        this.router.navigate(['home']).then();
                    }, timeout);
                },
                error: (err) => {
                    console.log(err);
                    this.notificationService.showError("Verifique suas credenciais!");
                }
            });
    }
}
