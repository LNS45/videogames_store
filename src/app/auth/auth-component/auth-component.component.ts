import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-auth-component',
  imports: [
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
  ],
  standalone: true,
  templateUrl: './auth-component.component.html',
  styleUrl: './auth-component.component.css',
  //Para afectar a los estilos de los componentes hijo y no repetir codigo
  encapsulation: ViewEncapsulation.None,

})
export class AuthComponentComponent {

}
