import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  constructor(){
    this.group = new FormGroup({
      nombre: new FormControl("",Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      contraseña: new FormControl("",Validators.required),
      confirmaContraseña: new FormControl("",Validators.required),
    })
  }

  confirmarContrasena(): boolean {
    const contraseña = this.group.get('contraseña')?.value;
    const confirmarContraseña = this.group.get('confirmaContraseña')?.value;
  
    return contraseña === confirmarContraseña;
  }

  onSubmit():void{
    if(this.group.valid){
      alert("Formulario valido");
    }
    else{
      alert("Formulario no valido");
    }
  }

}
