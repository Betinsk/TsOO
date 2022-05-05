import { DaoInterface } from './DaoInterface'
import Pessoa from './Pessoa';

export class PessoaDao implements DaoInterface {
   
    
    nomeTabela: string = 'tb_pessoa';

    inserir(object: Pessoa): boolean {
       console.log('Logica de insert')
       return true
    }
    atualizar(object: Pessoa): boolean {
        console.log('Logica de Pessoa')
       return true
    }
    remover(id: number): Pessoa {
        console.log('Removido')
       return new Pessoa('', '')
     }

    selecionar(id: number) {
        throw new Error('Method not implemented.');
    }
    selecionarTodos() {
        throw new Error('Method not implemented.');
    }

}