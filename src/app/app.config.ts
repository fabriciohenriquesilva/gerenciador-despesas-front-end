import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors} from "@angular/common/http";
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {ConfirmationService, MessageService} from "primeng/api";
import {authInterceptor} from "./core/services/auth.interceptor";

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideHttpClient(withFetch(), withInterceptors([authInterceptor])),
        provideAnimations(),
        provideAnimationsAsync(),
        ConfirmationService,
        MessageService,
    ]
};
