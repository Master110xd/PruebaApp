import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  volver(){
    this.navCtrl.navigateForward('/home-profe')
  }
}
