import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { importProvidersFrom } from '@angular/core';

import { AppComponent } from './app/app.component';
import { routes } from './app/app-routing.module';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(IonicModule.forRoot()),
  ],
});