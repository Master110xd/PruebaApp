import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login-profe',
  templateUrl: './login-profe.page.html',
  styleUrls: ['./login-profe.page.scss'],
})
export class LoginProfePage implements OnInit {

  usuario:string=''
  contrasenia:string=''
  constructor(private navCtrl:NavController,
    private alertCtrl:AlertController
  ) { }

  ngOnInit() {
  }

  validar(){
    if (!this.usuario || !this.contrasenia) {
      this.presentAlert()
    } else {
      localStorage.setItem("usuario",this.usuario)
      this.navCtrl.navigateForward('/home-profe');
    }
  }

  volver(){
    this.navCtrl.navigateForward('/inicio-sesion')
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Login',
      subHeader: 'Acceso',
      message: 'Debes rellenar formulario para continuar',
      buttons: ['Reintentar'],
    });

    await alert.present();
  }
}
