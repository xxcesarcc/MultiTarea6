import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class GeneroPage implements OnInit {

  nombre: string = '';
  genero: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  predecirGenero() {
    if (this.nombre) {
      this.http.get(`https://api.genderize.io/?name=${this.nombre}`)
        .subscribe((data: any) => {
          this.genero = data.gender;
        });
    }
  }
}