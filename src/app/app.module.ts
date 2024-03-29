import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/shared/material.module';
import { HeaderComponent } from './components/header/header.component';
import { PokeTableComponent } from './components/poke-table/poke-table.component';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { PokemonComponent } from './pokemon/pokemon.component';



@NgModule({ //decorador para agregar caracteristicas o config
  declarations: [ //registro de componentes 
    AppComponent,
    HeaderComponent,
    PokeTableComponent,
    PokeDetailComponent,
    FooterComponent,
    PokemonComponent
  ],
  imports: [ //registro de modulos Angular
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
