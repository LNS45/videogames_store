import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthUserService } from '../../../servicios/auth-user.service';
import { Usuario } from '../../../servicios/auth-user.service';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {
  group: FormGroup;

  constructor(private usuariosDb: AuthUserService, private router: Router){
    //Instancias de campos del formulario
    this.group = new FormGroup({
      nombre: new FormControl("",Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      usuario: new FormControl("",Validators.required),
      contraseña: new FormControl("",Validators.required),
      confirmaContraseña: new FormControl("",Validators.required),
    })
  }
  //Revisa si coinciden
  confirmarContrasena(): boolean {
    const contraseña = this.group.get('contraseña')?.value;
    const confirmarContraseña = this.group.get('confirmaContraseña')?.value;
    return contraseña === confirmarContraseña;
  }
  //Funcion ejecutada al presionar el boton
  onSubmit():void{
    if(this.group.valid){
      const newUsuario : Usuario = {
        user: this.group.get('usuario')?.value,
        password: this.group.get('contraseña')?.value,
        name: this.group.get('nombre')?.value,
        email: this.group.get('email')?.value,
      }
      try {
        alert('Usuario registrado con éxito.')
        this.usuariosDb.registrarUsuario(newUsuario);
        //Redireccion a pagina de inicio de sesion al registrar usuario
        this.router.navigate(["/login"]);
      } catch (error) {
        console.log(error);
      }
    }
    else{
      alert("Formulario no valido");
    }
  }

}
