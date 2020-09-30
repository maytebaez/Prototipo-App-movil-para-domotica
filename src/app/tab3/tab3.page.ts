import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  temperatura=20;

  constructor(public alertController: AlertController) {}

  aumentar(){
    if (this.temperatura<25){
      this.temperatura=this.temperatura+1;
    }
    else{
      this.presentAlert();
    }
  }

  reducir(){
    if(this.temperatura>16){
      this.temperatura=this.temperatura-1;
    }
    else{
      this.presentAlert();
    }

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      subHeader: 'Temperatura incorrecta',
      message: 'La temperatura debe estar dentro del rango recomendado',
      buttons: ['OK']
    });

    alert.present();
  }

}
