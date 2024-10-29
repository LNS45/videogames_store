import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthUserService } from '../../../servicios/auth-user.service';

@Component({
  selector: 'app-login',
  imports: [
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
    ReactiveFormsModule,
    CommonModule
  ],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  group: FormGroup;

  constructor(private usuariosDb: AuthUserService, private router: Router){
    this.group = new FormGroup({
      usuario: new FormControl("",Validators.required),
      contraseña: new FormControl("",[Validators.required])
    })

  }

  ngOnInit():void{
  }

  onSubmit():void{
    if(this.group.valid){
      if(this.usuariosDb.checkUser(this.group.get('usuario')?.value, this.group.get('contraseña')?.value)){
        alert("Bienvenido " + this.group.get('usuario')?.value);
        this.router.navigate(["/home"]);
      }
      else{
        alert("Acceso denegado");
      }
    }
    else{
      alert("Formulario no valido");
    }
  }

}
