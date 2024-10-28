import { Component, Input } from '@angular/core';
import { CardComponent } from '../../general/card/card.component';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {
  @Input() titulo : string = '';
}
