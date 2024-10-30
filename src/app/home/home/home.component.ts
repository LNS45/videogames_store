import { Component } from '@angular/core';
import { NavbarComponent } from '../../general/navbar/navbar.component';
import { ListaProductosComponent } from '../../productos/lista-productos/lista-productos.component';
import { CommonModule } from '@angular/common';
import { Router ,RouterOutlet } from '@angular/router';
import { Videogame } from '../../servicios/videogames-db.service';
import { VideogamesDbService } from '../../servicios/videogames-db.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    ListaProductosComponent,
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  mostrarTituloLista = 'Principal';
  rutaHomeActiva : boolean = true;
  datos: Videogame[] = [];


  constructor(router: Router, private videogamesDb: VideogamesDbService,){
    this.datos = this.videogamesDb.obtenerJuegosDatabase();
    console.log('Elementos principal: ' + this.datos.length);
    //Revisa si la ruta home esta activa
    router.events.subscribe(() => {
      if(router.url === '/home'){
        this.rutaHomeActiva = true;
      }
      else{
        this.rutaHomeActiva = false;
      }
    })
  }

}
