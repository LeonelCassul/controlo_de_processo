import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastarComponent } from './cadastar/cadastar.component';
import { ProcessoComponent } from './processo/processo.component';
import { HomeComponent } from './home/home.component';
import { ConsultarComponent } from './consultar/consultar.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastarComponent,
    ProcessoComponent,
    HomeComponent,
    ConsultarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
