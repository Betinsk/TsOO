import { DaoInterface } from './DaoInterface'
import Concessionaria  from './Concessionaria';

export class ConcessionariaDao implements DaoInterface<T> {
   
    
    nomeTabela: string = 'tb_concessionaria';

    inserir(object: Concessionaria): boolean {
       console.log('Logica de insert')
       return true
    }
    atualizar(object: Concessionaria): boolean {
        throw new Error('Method not implemented.');
    }
    remover(id: number): Concessionaria {
        console.log('Removido')
       return new Concessionaria('', [])
     }

    selecionar(id: number) {
        throw new Error('Method not implemented.');
    }
    selecionarTodos() {
        throw new Error('Method not implemented.');
    }

}