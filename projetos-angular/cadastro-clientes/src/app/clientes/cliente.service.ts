import { Cliente } from "./cliente.model"

export class ClienteService{
    private clientes: Cliente[] = []

    getClientes(): Cliente[]{
        return this.clientes
    }

    adicionarCliente (nome: string, fone: string, email: string): void{
        const cliente: Cliente = {
            nome, fone, email
        }
        this.clientes = [...this.clientes, cliente]
    }
}