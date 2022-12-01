import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoesListComponent } from './shoes-list/shoes-list.component';

import {HttpClientModule} from '@angular/common/http';
 
import { FormsModule} from '@angular/forms';
import { ShoesAboutComponent } from './shoes-about/shoes-about.component';
import { ShoeAppComponent } from './shoe-app/shoe-app.component';
import { InputCantidadComponent } from './input-cantidad/input-cantidad.component';
import { AppRoutingModule } from './app.routing.module';
import { CarritoCompraComponent } from './carrito-compra/carrito-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoesListComponent,
    ShoesAboutComponent,
    ShoeAppComponent,
    InputCantidadComponent,
    CarritoCompraComponent,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],

  providers: [

  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
