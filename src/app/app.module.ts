import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// eslint-disable-next-line no-underscore-dangle
export const _ID = 'Chat_VivaApp_Button';
// eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
export const _NombreFormField = 'Chat_VivaApp_ID_Nombre';
// eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
export const _MailFormField = 'Chat_VivaApp_ID_Correo';
// eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
export const _PhoneFormField = 'Chat_VivaApp_ID_Telefono';
// eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
export const _CampanaToGo = 'Chat_VivaApp_Campaign';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
