/*Cada archivo/componente que se vaya creando, se agrupa a un modulo.
Todo archivo exporto e importo aca.*/

/*MODULO PRINCIPAL*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarraComponent } from './barra/barra.component';
import { SeccionheroComponent } from './seccionhero/seccionhero.component';
import { SeccionsobremiComponent } from './seccionsobremi/seccionsobremi.component';
import { SeccionexpComponent } from './seccionexp/seccionexp.component';
import { SkillsComponent } from './skills/skills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    SeccionheroComponent,
    SeccionsobremiComponent,
    SeccionexpComponent,
    SkillsComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
