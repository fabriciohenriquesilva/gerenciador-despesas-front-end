import {enableProdMode} from '@angular/core';

import {environment} from './environments/environment';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {appConfig} from "./app/app.config";
import {registerLocaleData} from "@angular/common";
import localePt from '@angular/common/locales/pt';

if (environment.production) {
    enableProdMode();
}

registerLocaleData(localePt);

bootstrapApplication(AppComponent, appConfig).catch(e => console.error(e));
