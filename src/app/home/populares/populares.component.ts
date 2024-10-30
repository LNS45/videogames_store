import { Component } from '@angular/core';
import { ListaProductosComponent } from '../../productos/lista-productos/lista-productos.component';
import { VideogamesDbService } from '../../servicios/videogames-db.service';
import { Videogame } from '../../servicios/videogames-db.service';

@Component({
  selector: 'app-populares',
  standalone: true,
  imports: [
    ListaProductosComponent,
  ],
  templateUrl: './populares.component.html',
  styleUrl: './populares.component.css'
})
export class PopularesComponent {

  mostrarTituloLista = 'Populares';
  datos: Videogame[] = [];

  constructor(private videogamesDb: VideogamesDbService,) {
    this.datos = this.videogamesDb.obtenerJuegoPorPopularidad();
    console.log('Elementos por popularidad: ' + this.datos.length);
  }

}
