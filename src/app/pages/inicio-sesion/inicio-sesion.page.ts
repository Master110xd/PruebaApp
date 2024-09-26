import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  alumno(){
    this.navCtrl.navigateForward('/login');
  }

  docente() {
    this.navCtrl.navigateForward('login-profe')
  }
}
