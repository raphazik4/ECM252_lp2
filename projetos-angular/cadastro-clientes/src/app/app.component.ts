import { Component } from '@angular/core';
import { Cliente } from './clientes/cliente.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cadastro-clientes';
  clientes: Cliente[] = []

  onClienteAdicionado(cliente : Cliente){
    //this.clientes.push(cliente)
    this.clientes = [...this.clientes, cliente] // - cria uma cópia e adiciona-se um novo objeto (impede a situação de corrida, disputa)
  }

}
