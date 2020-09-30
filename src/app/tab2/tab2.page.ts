import { Component } from '@angular/core';
import { AlertController, NumericValueAccessor } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  progreso:number;
  final:number;
  contador:number;
  timer: number;
  intervalo;
  intervalo1;
  estado=1;

  constructor(public alertController: AlertController) {}
  

  startTimer1() {

    this.intervalo = setInterval ( () => {
      this.cambiarProgressBar();
      if(this.progreso>1){
        clearInterval(this.intervalo);
        return;
      }
    },1000);

  }

  startTimer2() {

    this.intervalo1 = setInterval ( () => {
      this.cambiarProgressBar();
      if(this.progreso>1){
        clearInterval(this.intervalo1);
        return;
      }
    },1000);

  }

  detener(){
    clearInterval(this.intervalo);
    clearInterval(this.intervalo1);
    return;
  }

  cambiarProgressBar (){
      this.progreso = this.contador/this.final;
      this.contador++;
  }

  inicio (finTrabajo: number, finDescanso: number){
    this.estado=2;
    this.progreso=0;
    this.contador=0;
    this.final = finTrabajo*60;
    this.startTimer1();

    setTimeout ( () => {
      this.presentAlert1();
      clearInterval(this.intervalo);
      this.progreso=0;
      this.contador=0;
      this.final = finDescanso*60;
      this.startTimer2();
      this.estado=3;
    },this.final*1000);
     
  } 

  async presentAlert1() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ha terminado el tiempo de trabajo',
      subHeader: 'Hora de descanso!',
      message: 'Es hora de tomar un respiro',
      buttons: ['OK']
    });

    alert.present();
  }

}
