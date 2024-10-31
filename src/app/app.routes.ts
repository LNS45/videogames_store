import { Routes } from '@angular/router';
import { AuthComponentComponent } from './auth/auth-component/auth-component.component';
import { LoginComponent } from './auth/auth-component/login/login.component';
import { RegistrarComponent } from './auth/auth-component/registrar/registrar.component';
import { HomeComponent } from './home/home/home.component';
import { PopularesComponent } from './home/populares/populares.component';
import { MasDescargadosComponent } from './home/mas-descargados/mas-descargados.component';
import { ProximamenteComponent } from './home/proximamente/proximamente.component';
import { FormAgregarJuegoComponent } from './agregar-juego/form-agregar-juego/form-agregar-juego.component';
import { authGuardGuard } from './auth-guard.guard';

export const routes: Routes = [
    {   
        path: "", 
        component: AuthComponentComponent,
        children: [
            {
                //Para que el componente login sea el inicial por defecto
                path: "",
                redirectTo: "login",
                pathMatch: "full"
            },
            {
                path: "login",
                component: LoginComponent
            },
            {
                path: "register",
                component: RegistrarComponent
            }
        ]
    },
    {
        path: "home",
        component: HomeComponent,
        canActivate: [authGuardGuard],
        children: [
            {
                path: "populares",
                component: PopularesComponent
            },
            {
                path: "masDescargados",
                component: MasDescargadosComponent
            },
            {
                path: "proximamente",
                component: ProximamenteComponent
            },

        ]
    },
    {
        path: 'agregarJuego',
        canActivate: [authGuardGuard],
        component: FormAgregarJuegoComponent
    }
];
