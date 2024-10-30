import { HomeComponent } from './../home/home.component';
import { Component } from '@angular/core';
import { ListaProductosComponent } from '../../productos/lista-productos/lista-productos.component';
import { VideogamesDbService } from '../../servicios/videogames-db.service';
import { Videogame } from '../../servicios/videogames-db.service';


@Component({
  selector: 'app-mas-descargados',
  standalone: true,
  imports: [
    ListaProductosComponent,
    HomeComponent
  ],
  templateUrl: './mas-descargados.component.html',
  styleUrl: './mas-descargados.component.css'
})
export class MasDescargadosComponent {

  mostrarTituloLista = 'Más Descargados';
  datos: Videogame[] = [];

  constructor(private videogamesDb: VideogamesDbService,) {
    this.datos = this.videogamesDb.obtenerJuegoPorDescargas();
    console.log('Elementos por descargas: ' + this.datos.length);
  }

}
