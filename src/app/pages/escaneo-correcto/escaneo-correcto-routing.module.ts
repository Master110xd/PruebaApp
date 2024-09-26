import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscaneoCorrectoPage } from './escaneo-correcto.page';

const routes: Routes = [
  {
    path: '',
    component: EscaneoCorrectoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscaneoCorrectoPageRoutingModule {}
