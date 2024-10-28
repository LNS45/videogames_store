import { VideogamesDbService } from './../../servicios/videogames-db.service';
import { Component, Input } from '@angular/core';
import { CardComponent } from '../../general/card/card.component';
import { CommonModule } from '@angular/common';
import { Videogame } from './../../servicios/videogames-db.service';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule
  ],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})

export class ListaProductosComponent{

  lista_videojuegos: Videogame[] = [];

  @Input() titulo : string = '';
  constructor(private videogamesDb: VideogamesDbService) {
    this.lista_videojuegos = this.videogamesDb.obtenerJuegosDatabase();
  }
}
