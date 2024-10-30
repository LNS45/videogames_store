import { Component } from '@angular/core';
import { NavbarComponent } from '../../general/navbar/navbar.component';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { VideogamesDbService } from '../../servicios/videogames-db.service';
import { Videogame } from '../../servicios/videogames-db.service';


@Component({
  selector: 'app-form-agregar-juego',
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './form-agregar-juego.component.html',
  styleUrl: './form-agregar-juego.component.css'
})
export class FormAgregarJuegoComponent {

  group_add: FormGroup;
  inputRangeValue: number = 2; 
  dataBase: Videogame[] = [];

  constructor( private router: Router, private videogamesDb: VideogamesDbService){
    //Instancias de campos del formulario
    this.group_add = new FormGroup({
      titulo: new FormControl("",Validators.required),
      descripcion: new FormControl("",Validators.required),
      fecha_Lanzamiento: new FormControl("",Validators.required),
      url_image: new FormControl("",Validators.required),
      rating: new FormControl(this.inputRangeValue,Validators.required),
      descargas: new FormControl("",Validators.required),
      proximamente: new FormControl("",Validators.required),
      
    })
    this.group_add.get('rating')?.valueChanges.subscribe(value => {
      this.inputRangeValue = value;
    });
  }


  //inputRangeValue: number = this.group_add.get('rating')?.value;
    //Funcion ejecutada al presionar el boton
    onSubmit():void{
      if(this.group_add.valid){
        const nuevoVideojuego: Videogame = {
          title: this.group_add.get('titulo')?.value,
          description: this.group_add.get('descripcion')?.value,
          releaseDate: this.group_add.get('fecha_Lanzamiento')?.value,
          image: this.group_add.get('url_image')?.value,
          rating: this.group_add.get('rating')?.value,
          downloads: this.group_add.get('descargas')?.value,
          comingSoon: this.group_add.get('proximamente')?.value,
        }
        try {
          alert('Videojuego agregado con éxito.')
          this.videogamesDb.agregarJuego(nuevoVideojuego);
          //Redireccion a pagina de inicio de sesion al registrar usuario
          this.router.navigate(["/home"]);
        } catch (error) {
          console.log(error);
        }
      }
      else{
        alert("Formulario no valido");
      }
    }

}
