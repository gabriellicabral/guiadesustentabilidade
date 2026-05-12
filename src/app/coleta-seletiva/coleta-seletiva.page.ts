import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-coleta-seletiva',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './coleta-seletiva.page.html',
  styleUrls: ['./coleta-seletiva.page.scss'],
})
export class ColetaSeletivaPage {}