import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  
  usuario:string=''
  horaActual:string=''

  constructor(private navCtrl:NavController) {}
  ngOnInit(): void {
    this.usuario=localStorage.getItem("usuario") ?? ''
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
    this.horaActual = this.horaActual.replace(/(^|\s)(\w)/g, (match) => match.toUpperCase()); //transforma el dia y mes, en mayusculas, ni idea como funciona la verdad, pero funciona, un saludo profe freddy. nos pone el 7 lo invito una pizza
  }

  validar(){
      this.navCtrl.navigateForward('/login');
    }
  escanear(){
    this.navCtrl.navigateForward('/escanear')
  }
  }

