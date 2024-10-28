import { Component } from '@angular/core';
import { NavbarComponent } from '../../general/navbar/navbar.component';
import { ListaProductosComponent } from '../../productos/lista-productos/lista-productos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    ListaProductosComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  mostrarTituloLista = 'Mas Populares';

  cambiarTituloLista(titulo : string) : void{
    this.mostrarTituloLista = titulo;
  }

}
