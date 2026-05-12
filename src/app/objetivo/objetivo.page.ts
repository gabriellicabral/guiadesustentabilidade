import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-objetivo',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './objetivo.page.html',
  styleUrls: ['./objetivo.page.scss'],
})
export class ObjetivoPage {}