import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.page.html',
  styleUrls: ['./wordpress.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule]
})
export class WordPressPage implements OnInit {
  noticias!: any[];

  constructor(private http: HttpClient) {
    this.noticias = [
      {
        logoUrl: 'ruta/a/logo_wordpress.png',
        titulo: 'Israel Gaza: EU leaders set to discuss humanitarian pauses',
        resumen: 'Los líderes de la EU se reunirán en Bruselas el jueves para una cumbre eclipsada por la guerra de Hamás con Israel y el fracaso de la UE a la hora de proyectar un frente unido. Durante semanas, la postura de la Unión Europea sobre la guerra se ha visto empañada por mensajes contradictorios, meteduras de pata diplomáticas y opiniones nacionales contradictorias sobre el conflicto palestino-israelí.',
        enlace: 'https://www.bbc.com/news/world-europe-67216072',
      },
      {
        logoUrl: 'ruta/a/logo_wordpress.png',
        titulo: 'Mike Johnson: Los republicanos consiguieron que se eligiera un presidente. Ahora comienza la parte difícil',
        resumen: 'Al final, el conflicto de liderazgo de la Cámara de Representantes más largo de los tiempos modernos terminó como a veces suceden las guerras, con ambas partes perdiendo el valor para seguir luchando. El congresista Mike Johnson fue elegido el miércoles como el presidente número 56 de la Cámara de Representantes con vítores, ovaciones de pie y sonrisas de sus colegas republicanos que contradecían las tensiones que habían dividido al partido durante las últimas tres semanas.',
        enlace: 'https://www.bbc.com/news/world-us-canada-67223383',
      },
      {
        logoUrl: 'ruta/a/logo_wordpress.png',
        titulo: 'Rusia dice que ensayó un ataque nuclear "masivo"',
        resumen: 'Rusia ha ensayado su capacidad para lanzar un ataque nuclear "masivo", dice el Kremlin. El ejercicio militar implicó dar una "respuesta a un ataque nuclear enemigo", dijo el ministro de Defensa, Sergei Shoigu. La televisión estatal lo mostró contándole el ensayo al presidente Vladimir Putin.',
        enlace: 'https://www.bbc.com/news/world-europe-67222213',
      }
    ];
   }

  ngOnInit() {
  }
}