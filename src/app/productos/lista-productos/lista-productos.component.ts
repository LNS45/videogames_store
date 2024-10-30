import { Component, Input } from '@angular/core';
import { CardComponent } from '../../general/card/card.component';
import { CommonModule } from '@angular/common';
import { Videogame } from './../../servicios/videogames-db.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})

export class ListaProductosComponent{

  //Se reciben las siguientes variables de cada uno de los componentes.
  @Input() lista_videojuegos: Videogame[] = [];
  @Input() titulo : string = '';
  
}
