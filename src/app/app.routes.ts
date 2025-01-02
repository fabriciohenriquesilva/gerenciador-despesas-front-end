import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from "./pages/user/login/login.component";
import {AuthGuard} from "./core/services/auth.guard.service";

export const routes: Routes = [
    {
        path: 'auth/login',
        component: LoginComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'categorias',
        loadChildren: () => import("./pages/categoria/categoria-routing.module")
            .then(m => m.CategoriaRoutingModule),
        canActivate: [AuthGuard]
    }
    // {
    //     path: 'cadastros',
    //     loadChildren: () => import("./pages/cadastros/cadastros-routing.module")
    //         .then(m => m.CadastrosRoutingModule)
    // }
];
