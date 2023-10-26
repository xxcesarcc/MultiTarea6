import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class EdadPage implements OnInit {

  nombre: string = '';
  edadMensaje: string = '';
  imagenUrl: string = '';
  edad: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  determinarEdad() {
    if (this.nombre) {
      this.http.get(`https://api.agify.io?name=${this.nombre}`)
        .subscribe((data: any) => {
          this.edad = data.age;
          if (this.edad < 18) {
            this.edadMensaje = 'Eres joven.';
            this.imagenUrl = 'assets/img/adolecentes.png';
          } else if (this.edad >= 18 && this.edad < 60) {
            this.edadMensaje = 'Eres adulto.';
            this.imagenUrl = 'assets/img/padres.png';
          } else {
            this.edadMensaje = 'Eres anciano.';
            this.imagenUrl = 'assets/img/abuelos.png';
          }
        });
    } else {
      this.edadMensaje = 'Por favor, ingrese un nombre.';
    }
  }
}