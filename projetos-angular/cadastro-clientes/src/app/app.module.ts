// Angular modules imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Components Imports
import { AppComponent } from './app.component';
import { ClienteInserirComponent } from './clientes/cliente-inserir/cliente-inserir.component';

// Angular Material Imports
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'

@NgModule({
  declarations: [
    AppComponent,
    ClienteInserirComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,

    // Angular Material Modules
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
