import { ConcessionariaInterface } from "./ConcessionariaInterface"
import Carro  from "./Carro"


export default class Concessionaria implements ConcessionariaInterface{
    private endereco: string
    private listaDeCarros: Array<Carro>

    constructor(endereco: string, listaDeCarros: Array<Carro>) {
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    fornecerHorariosDeFunciomento(): string {
       return 'De segunda a sexta de 08:00 as 18:00 e sábado das 08: as 12:00'
    }

    public fornecerEndereco() {
        return this.endereco
    }


    public mostrarListaDeCarros(): Array<Carro> {
        return this.listaDeCarros

    }
}