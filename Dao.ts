import { DaoInterface } from "./DaoInterface";

export class Dao<T> implements DaoInterface<T> {
     
    nomeTabela: string = '';

    inserir(object: T): boolean {
       console.log('Logica de insert')
       return true
    }
    atualizar(object: T): boolean {
        console.log('Logica de Pessoa')
       return true
    }
    remover(id: number): T {
        console.log('Removido')
     return Object()
     }

    selecionar(id: number): T {
        throw new Error('Method not implemented.');
    }
    selecionarTodos(): T {
        throw new Error('Method not implemented.');
    }

}