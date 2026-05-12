import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.page').then(m => m.HomePage),
  },
  {
    path: 'apresentacao',
    loadComponent: () =>
      import('./apresentacao/apresentacao.page').then(m => m.ApresentacaoPage),
  },
  {
    path: 'coleta-seletiva',
    loadComponent: () =>
      import('./coleta-seletiva/coleta-seletiva.page').then(m => m.ColetaSeletivaPage),
  },
  {
    path: 'descarte-consciente',
    loadComponent: () =>
      import('./descarte-consciente/descarte-consciente.page').then(m => m.DescarteConscientePage),
  },
  {
    path: 'objetivo',
    loadComponent: () =>
      import('./objetivo/objetivo.page').then(m => m.ObjetivoPage),
  },
];