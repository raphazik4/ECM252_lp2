// Angular modules imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Components Imports
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component'
import { ClienteInserirComponent } from './clientes/cliente-inserir/cliente-inserir.component';
import { ClienteListaComponent } from './clientes/cliente-lista/cliente-lista.component';

// Angular Material Imports
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ClienteListaComponent,
    ClienteInserirComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,

    // Angular Material Modules
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
