import { Component } from "@angular/core";

@Component({
    selector: 'app-cliente-inserir',
    //template: '<p>Oi</p>'
    templateUrl: './cliente-inserir.component.html'
})
export class ClienteInserirComponent{
    nome : string
    fone : string
    email: string

    onAdicionarCliente(){
        console.log("Inserindo Cliente..." + this.nome, this.fone, this.email)
    }
}