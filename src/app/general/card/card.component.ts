import { Component, Input, NgModule } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  //Objeto con los datos del videojuego, se reciben en la creacion del componente
  @Input() data! : {
    title : string;
    description: string;
    releaseDate: string;
    image: string;
    rating: number;
    downloads: number;
    comingSoon: boolean;
  };
  //Propiedades de la card, con esto se llenan los datos en el HTML
  title! : string;
  description!: string;
  releaseDate!: string;
  image!: string;
  rating!: number;
  downloads!: number;
  comingSoon!: boolean;

  ngOnInit(): void {
    if (this.data) {
      this.title = this.data.title;
      this.description = this.data.description;
      this.releaseDate = this.data.releaseDate;
      this.image = this.data.image;
      this.rating = this.data.rating;
      this.downloads = this.data.downloads;
      this.comingSoon = this.data.comingSoon;
    }
  }
  constructor() {

  }
}
