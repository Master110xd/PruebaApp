import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQRPage implements OnInit {

  horaActual:string=''
  constructor(private navCtrl:NavController) { }

  ngOnInit() {
    this.actualizarHora();
    setInterval(() => this.actualizarHora(), 1000); // Actualiza cada segundo
  }

  actualizarHora() {
    const ahora = new Date();
    const opciones: Intl.DateTimeFormatOptions = {
      weekday: 'long', // Día de la semana
      year: 'numeric',
      month: 'long', // Mes completo
      day: 'numeric',
      hour: '2-digit', // Horas
      minute: '2-digit', // Minutos
      second: '2-digit', // Segundos
      hour12: false, // Formato de 24 horas
    };
    this.horaActual = ahora.toLocaleString('es-ES', opciones); // 'es-ES' para configuración regional en español
    this.horaActual = this.horaActual.replace(/(^|\s)(\w)/g, (match) => match.toUpperCase()); //transforma el dia y mes, en mayusculas, ni idea como funciona la verdad, pero funciona, un saludo profe freddy. nos pone el 7 lo invitamos a una pizza
  }

  finalizar(){
    this.navCtrl.navigateForward('/home-profe')
  }
}
