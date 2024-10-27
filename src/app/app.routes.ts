import { Routes } from '@angular/router';
import { AuthComponentComponent } from './auth/auth-component/auth-component.component';
import { LoginComponent } from './auth/auth-component/login/login.component';
import { RegistrarComponent } from './auth/auth-component/registrar/registrar.component';

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
];
