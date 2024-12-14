import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'categorias',
        loadChildren: () => import("./pages/categoria/categoria-routing.module")
            .then(m => m.CategoriaRoutingModule)
    }
    // {
    //     path: 'cadastros',
    //     loadChildren: () => import("./pages/cadastros/cadastros-routing.module")
    //         .then(m => m.CadastrosRoutingModule)
    // }
];
