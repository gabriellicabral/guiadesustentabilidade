import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColetaSeletivaPage } from './coleta-seletiva.page';

const routes: Routes = [
  {
    path: '',
    component: ColetaSeletivaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColetaSeletivaPageRoutingModule {}
