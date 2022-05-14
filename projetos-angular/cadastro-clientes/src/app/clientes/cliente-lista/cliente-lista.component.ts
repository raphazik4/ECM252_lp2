import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  @Input()
  clientes: Cliente[] = [
    // {
    //   nome: 'José',
    //   fone: '123455678',
    //   email: 'jose@email.com'
    // },
    // {
    //   nome: 'Maria',
    //   fone: '98765432',
    //   enmail: 'maria@email.com'
    // }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
