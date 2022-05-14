import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cadastro-clientes';
  clientes = []

  onClienteAdicionado(cliente){
    //this.clientes.push(cliente)
    this.clientes = [...this.clientes, cliente] // - cria uma cópia e adiciona-se um novo objeto (impede a situação de corrida, disputa)
  }

}
