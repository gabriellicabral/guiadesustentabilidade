import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescarteConscientePage } from './descarte-consciente.page';

const routes: Routes = [
  {
    path: '',
    component: DescarteConscientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescarteConscientePageRoutingModule {}
