import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-universidades',
  templateUrl: './universidades.page.html',
  styleUrls: ['./universidades.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class UniversidadesPage implements OnInit {
  pais!: string;
  universidades!: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  buscarUniversidades() {
    this.http.get<any[]>(`http://universities.hipolabs.com/search?country=${encodeURIComponent(this.pais)}`)
      .subscribe(response => {
        this.universidades = response;
      });
  }
}