import { Injectable, NgModule } from '@angular/core';

//Para crear un array de Videogame para la base de datos estatica
export interface Videogame{
  id: number;
  title: string;
  description: string;
  releaseDate: string;
  image: string;
  rating: number;
  downloads: number;
  comingSoon: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class VideogamesDbService {
  private videogamesDB: Videogame[];


  constructor(){
    this.videogamesDB = [
      {
        id: 1,
        title: "The Legend of Zelda: Tears of the Kingdom",
        description: "Un juego de acción y aventura en un mundo abierto ambientado en Hyrule.",
        releaseDate: "2023-05-12",
        image: "https://i.imgur.com/DibL1kK.jpg",
        rating: 4.8,
        downloads: 5000000,
        comingSoon: false,
      },
      {
        id: 2,
        title: "Baldur's Gate 3",
        description: "Un videojuego de rol basado en Dungeons & Dragons.",
        releaseDate: "2023-08-03",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/3098481c9164bb5f33069b37e49fba1a572ea3b89971ee7b.jpg",
        rating: 3.9,
        downloads: 3000000,
        comingSoon: false,
      },
      {
        id: 3,
        title: "Spider-Man 2",
        description: "Un juego de acción y aventura donde juegas como Spider-Man y Miles Morales.",
        releaseDate: "2023-10-20",
        image: "https://www.lavanguardia.com/files/image_948_465/uploads/2023/06/09/648253a6850e9.png",
        rating: 4.9,
        downloads: 2500000,
        comingSoon: false,
      },
      {
        id: 4,
        title: "Resident Evil 4 (Remake)",
        description: "Un remake del clásico juego de horror de supervivencia ambientado en un misterioso pueblo.",
        releaseDate: "2023-03-24",
        image: "https://www.muycomputer.com/wp-content/uploads/2022/09/Resident-Evil-4-Remake-portada.jpg",
        rating: 3.8,
        downloads: 1000000,
        comingSoon: false,
      },
      {
        id: 5,
        title: "Assassin's Creed Mirage",
        description: "Un juego de acción y aventura que regresa a las raíces de la serie, ambientado en Bagdad.",
        releaseDate: "2023-10-05",
        image: "https://www.nextgame.es/wp-content/uploads/2022/09/image.png",
        rating: 3.8,
        downloads: 1500000,
        comingSoon: false,
      },
      {
        id: 6,
        title: "Alan Wake II",
        description: "Una secuela de la aclamada historia de horror psicológico en un mundo abierto.",
        releaseDate: "2023-10-27",
        image: "https://cdn1.epicgames.com/offer/c4763f236d08423eb47b4c3008779c84/EGS_AlanWake2_RemedyEntertainment_S1_2560x1440-ec44404c0b41bc457cb94cd72cf85872",
        rating: 4.7,
        downloads: 50000,
        comingSoon: false,
      },
      {
        id: 7,
        title: "Horizon Forbidden West",
        description: "Un juego de acción y aventura en un mundo abierto post-apocalíptico lleno de máquinas.",
        releaseDate: "2022-02-18",
        image: "https://i0.wp.com/nerfeados.com/wp-content/uploads/2022/02/HFW_Portada.jpg?fit=1919%2C1080&ssl=1",
        rating: 4.7,
        downloads: 30000,
        comingSoon: false,
      },
      {
        id: 8,
        title: "Tekken 8",
        description: "La última entrega de la famosa serie de juegos de lucha, con nuevos personajes y mecánicas.",
        releaseDate: "2024-01-26",
        image: "https://www.somosxbox.com/wp-content/uploads/2024/01/Hazte-con-Tekken-8-para-Xbox-en-oferta-portada.jpg",
        rating: 4.5,
        downloads: 10000,
        comingSoon: true,
      },
      {
        id: 9,
        title: "Mortal Kombat 1",
        description: "El último capítulo de la legendaria serie de juegos de lucha con nuevos personajes y mecánicas.",
        releaseDate: "2023-09-14",
        image: "https://cdn1.epicgames.com/offer/fda0f2b4047f46ffb4e94d5595c1468e/EGS_MortalKombat1_NetherRealmStudios_S3_2560x1440-bea2296b499ceecfc1dc1a91ab0d9a36",
        rating: 4.7,
        downloads: 80000,
        comingSoon: false,
      },
      {
        id: 10,
        title: "The Binding of Isaac",
        description: "Un juego de acción y aventura en el que controlas a Isaac en su lucha contra monstruos y enemigos.",
        releaseDate: "2011-09-28",
        image: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2015/04/463938-binding-isaac-rebirth-llegara-pronto-xbox-one-wii-3ds.png?tf=3840x",
        rating: 4,
        downloads: 2000000,
        comingSoon: false,
      },
      {
        id: 11,
        title: "Ghost of Tsushima",
        description: "Un juego de acción y aventura en un mundo abierto que sigue a un samurái en su lucha contra la invasión mongola.",
        releaseDate: "2020-07-17",
        image: "https://www.hd-tecnologia.com/imagenes/articulos/2021/06/Ghost-of-Tsushim.jpg",
        rating: 4.8,
        downloads: 5000000,
        comingSoon: false,
      },
      {
        id: 12,
        title: "Elden Ring",
        description: "Un juego de rol de acción ambientado en un vasto mundo abierto lleno de misterios y peligros.",
        releaseDate: "2022-02-25",
        image: "https://periodismo.ull.es/wp-content/uploads/2022/04/Se-rumorea-que-Elden-Ring-realizara-proximamente-una-nueva-prueba.jpg",
        rating: 4.9,
        downloads: 4000000,
        comingSoon: false,
      },
      {
        id: 13,
        title: "WWE 2K24",
        description: "La última entrega de la popular serie de videojuegos de lucha libre, con nuevos modos de juego y luchadores.",
        releaseDate: "2024-12-05",
        image: "https://mundolucha.com/wp-content/uploads/2024/01/wwe-2k24-celebra-40-anos-de-wrestlemania.png",
        rating: 4.6,
        downloads: 2500000,
        comingSoon: true,
      },
      {
        id: 14,
        title: "Far Cry 6",
        description: "Un juego de acción y aventura en un mundo abierto donde luchas contra un régimen dictatorial en una isla tropical.",
        releaseDate: "2021-10-07",
        image: "https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD%20EDITION_EPIC_Store_Landscape_2560x1440-2560x1440-827a9d1823ad230a0ea5a2efc7936370.jpg",
        rating: 4,
        downloads: 3000000,
        comingSoon: false,
      },
      {
        id: 15,
        title: "Sons of the Forest",
        description: "Un juego de supervivencia en un mundo abierto lleno de peligros y misterios, donde debes sobrevivir.",
        releaseDate: "2023-02-23",
        image: "https://media.vandal.net/master/2-2023/202322513133827_1.jpg",
        rating: 3.6,
        downloads: 1200000,
        comingSoon: false,
      },
      {
        id: 16,
        title: "Red Dead Redemption 2",
        description: "Un juego de acción y aventura en un mundo abierto ambientado en el viejo oeste, que sigue la historia de una banda de forajidos.",
        releaseDate: "2018-10-26",
        image: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/10/red-dead-redemption-2_22.jpg?tf=3840x",
        rating: 4.9,
        downloads: 6000000,
        comingSoon: false,
      },
      {
        id: 17,
        title: "Silent Hill 2",
        description: "Videojuego de terror del subgénero de horror de supervivencia desarrollado por Team Silent y publicado por Konami.",
        releaseDate: "2024-10-26",
        image: "https://media.vandal.net/m/10-2022/2022102118454583_1.jpg",
        rating: 4,
        downloads: 100000,
        comingSoon: true,
      },
      {
        id: 18,
        title: "Dragon Ball Sparking Zero",
        description: "Lucha en combates que desafían la gravedad y las habilidades Ki de todos los personajes.",
        releaseDate: "2024-10-31",
        image: "https://www.irrompibles.net/irrwp/wp-content/uploads/2024/10/sparking_zero-1.jpg",
        rating: 5,
        downloads: 1000000,
        comingSoon: true,
      },
    ]
  }

  obtenerJuegosDatabase(){
    //console.log("Ejecutando 0");
    return this.videogamesDB;
  }

  obtenerJuegoPorPopularidad() : Videogame[]{
    //Logica para filtrar por popularidad
    const listaJuegosPopulares: Videogame[] = this.videogamesDB.filter((elemento) => {
      return elemento.rating >= 4;
    })
    //console.log("Ejecutando 1");
    return listaJuegosPopulares;
  }
  obtenerJuegoPorDescargas(){
    //Logica para filtrar por descargas
    const listaJuegosPorDescargas: Videogame[] = this.videogamesDB.filter((elemento) => {
      return elemento.downloads >= 500000;
    })
    //console.log("Ejecutando 2");
    return listaJuegosPorDescargas;
  }
  obtenerJuegoPorFechaLanzamiento(){
    //Logica para filtrar por fecha de lanzamiento
    const listaJuegoPorFecha: Videogame[] = this.videogamesDB.filter((elemento) => {
      return elemento.comingSoon === true;
    })
    //console.log("Ejecutando 3");
    return listaJuegoPorFecha;
  }

}
