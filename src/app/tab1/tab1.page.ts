import { Component } from '@angular/core';
import { Notifi } from '../notificacion.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  notificaciones: Notifi [] = [
    new Notifi ("Mala postura","1"),
    new Notifi ("Ha concluido tu tiempo de descanso","2"),
    new Notifi ("Ha concluido tu tiempo de trabajo","3"),
    new Notifi ("Mala postura","4"),
    new Notifi ("Mala postura","5"),
    new Notifi ("Recuerda que la temperatura es importante para un buen desempeño","6"),
    new Notifi ("Ha concluido tu tiempo de descanso","7"),
    new Notifi ("Ha concluido tu tiempo de trabajo","8"),
    new Notifi ("Ha concluido tu tiempo de descanso","9"),
    new Notifi ("Ha concluido tu tiempo de trabajo","10"),
  ];

  constructor() {
      this.guardarStorage();
      this.cargarStorage();
  }

  

  borrarNotificacion(not: Notifi){
      this.notificaciones= this.notificaciones.filter(notData => notData.desc !== not.desc);
      this.guardarStorage();
  }

  guardarStorage() {

    localStorage.setItem('data', JSON.stringify(this.notificaciones) );

  }

  cargarStorage() {

    if ( localStorage.getItem('data') ) {
      this.notificaciones = JSON.parse( localStorage.getItem('data') );
    } else {
      this.notificaciones = [];
    }

  }
    

}
