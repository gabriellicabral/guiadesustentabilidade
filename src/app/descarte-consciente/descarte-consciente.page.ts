import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-descarte-consciente',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './descarte-consciente.page.html',
  styleUrls: ['./descarte-consciente.page.scss'],
})
export class DescarteConscientePage {}