import { Cliente } from "./cliente.model"
import { Subject } from "rxjs"

export class ClienteService{
    private clientes: Cliente[] = []
    private listaClientesAtualizada = new Subject<Cliente[]>()

    getClientes(): Cliente[]{
        return this.clientes
    }

    adicionarCliente (nome: string, fone: string, email: string): void{
        const cliente: Cliente = {
            nome, fone, email
        }
        this.clientes = [...this.clientes, cliente]
        this.listaClientesAtualizada.next([...this.clientes]) // envia uma cópia para não ser possível alterar o original
    }

    getListaDeClientesAtualizada(){
        return this.listaClientesAtualizada.asObservable()
    }
}