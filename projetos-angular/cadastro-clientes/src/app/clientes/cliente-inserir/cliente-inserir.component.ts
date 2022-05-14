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
        let jsonStringData = `{\n"nome" : "${this.nome}",\n"email" : "${this.email}",\n"fone" : "${this.fone}"\n}`
        let message = `Dados NÃO inseridos com sucesso!\n\n${jsonStringData}`
        let jsonData = JSON.parse(jsonStringData)
        alert(message)
    }
}