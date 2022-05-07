import { Component } from "@angular/core";

@Component({
    selector: 'app-cliente-inserir',
    //template: '<p>Oi</p>'
    templateUrl: './cliente-inserir.component.html',
    styleUrls: [
        './cliente-inserir.component.css'
    ]
})
export class ClienteInserirComponent{
    nome : string
    fone : string
    email: string

    onAdicionarCliente(){
        let jsonData = `{\n"nome" : "${this.nome}",\n"email" : "${this.email}",\n"fone" : "${this.fone}"\n}`
        let message = `Dados inseridos com sucesso!\n\n${jsonData}`
        alert(message)
    }
}