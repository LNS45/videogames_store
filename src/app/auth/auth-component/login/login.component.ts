import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  constructor(){
    this.group = new FormGroup({
      usuario: new FormControl("",Validators.required),
      contraseña: new FormControl("",[Validators.required])
    })
  }

  ngOnInit():void{
  }

  onSubmit():void{
    console.log(this.group.get('contraseña')?.errors);
    if(this.group.valid){
      alert("Formulario valido");
    }
    else{
      alert("Formulario no valido");
    }
  }

}
