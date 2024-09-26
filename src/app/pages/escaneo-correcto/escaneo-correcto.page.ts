import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-escaneo-correcto',
  templateUrl: './escaneo-correcto.page.html',
  styleUrls: ['./escaneo-correcto.page.scss'],
})
export class EscaneoCorrectoPage implements OnInit {

 
  usuario:string=''
  constructor(private navCtrl:NavController) {}
  ngOnInit(): void {
    this.usuario=localStorage.getItem("usuario") ?? ''
  }

  validar(){
      this.navCtrl.navigateForward('/home');
    }
}
