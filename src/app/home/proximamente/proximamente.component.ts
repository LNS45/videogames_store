import { Component } from '@angular/core';
import { ListaProductosComponent } from '../../productos/lista-productos/lista-productos.component';
import { VideogamesDbService } from '../../servicios/videogames-db.service';
import { Videogame } from '../../servicios/videogames-db.service';

@Component({
  selector: 'app-proximamente',
  standalone: true,
  imports: [
    ListaProductosComponent,
  ],
  templateUrl: './proximamente.component.html',
  styleUrl: './proximamente.component.css'
})
export class ProximamenteComponent {
  mostrarTituloLista = 'Próximamente';
  datos: Videogame[] = [];

  constructor(private videogamesDb: VideogamesDbService,) {
    this.datos = this.videogamesDb.obtenerJuegoPorFechaLanzamiento();
    console.log('Elementos por Fecha de lanzamiento: ' + this.datos.length);
  }

}
