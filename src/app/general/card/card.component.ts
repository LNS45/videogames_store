import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  title : string = "Titulo";
  description: string = "Descripcion detallada del juego";
  releaseDate: string = "2024-12-10";
  image: string = "url";
  rating: number = 5;
  downloads: number = 2000;
  comingSoon: boolean = false;

  
}
