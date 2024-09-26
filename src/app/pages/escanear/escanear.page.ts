import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-escanear',
  templateUrl: './escanear.page.html',
  styleUrls: ['./escanear.page.scss'],
})
export class EscanearPage implements OnInit {

  usuario:string=''
  constructor(private navCtrl:NavController) {}
  ngOnInit(): void {
    this.usuario=localStorage.getItem("usuario") ?? ''

    setTimeout(()=>{ //se supone que aca lo escanea
      this.navCtrl.navigateForward(['/escaneo-correcto'])
    },5000)
  
  }

  validar(){
      this.navCtrl.navigateForward('/home');
    }

}
