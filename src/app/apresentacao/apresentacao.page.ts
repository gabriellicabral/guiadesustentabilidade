import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-apresentacao',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './apresentacao.page.html',
  styleUrls: ['./apresentacao.page.scss'],
})
export class ApresentacaoPage {}