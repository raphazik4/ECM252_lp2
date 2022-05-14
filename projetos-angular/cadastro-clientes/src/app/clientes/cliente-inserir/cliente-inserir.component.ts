import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector: 'app-cliente-inserir',
    //template: '<p>Oi</p>'
    templateUrl: './cliente-inserir.component.html',
    styleUrls: [
        './cliente-inserir.component.css'
    ]
})
export class ClienteInserirComponent{

    @Output()
    clienteAdicionado = new EventEmitter()

    nome : string
    fone : string
    email: string

    onAdicionarCliente(){
        let jsonStringData = `{\n"nome" : "${this.nome}",\n"email" : "${this.email}",\n"fone" : "${this.fone}"\n}`
        let jsonData = JSON.parse(jsonStringData)
        this.clienteAdicionado.emit(jsonData)
    }
}