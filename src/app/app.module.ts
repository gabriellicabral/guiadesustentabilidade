import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { routes } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    routes
  ],
})
export class AppModule {}