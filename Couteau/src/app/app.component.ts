import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Genero', url: '/genero', icon: 'female' },
    { title: 'Edad', url: '/edad', icon: 'footsteps' },
    { title: 'Universidades', url: '/universidades', icon: 'business' },
    { title: 'Clima', url: '/clima', icon: 'rainy' },
    { title: 'WordPress', url: '/wordpress', icon: 'globe' },
    { title: 'Acerca', url: '/acerca', icon: 'person-circle' },
  ];
}
