import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule 
  ]
})
export class ClimaPage implements OnInit {

  clima: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.http.get<any>('https://api.openweathermap.org/data/2.5/weather?q=Santo%20Domingo&appid=1965986ed8abc5d95d18f59bf37b58e0')
      .subscribe(response => {
        this.clima = response;
      });
  }
}
