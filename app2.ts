import  Carro  from './Carro'
import Concessionaria  from './Concessionaria'
import  Pessoa from './Pessoa'

export let carroA = new Carro('Corsa', 4)
let carroB = new Carro('Ferrari', 4)
let carroC = new Carro('Lambo', 2)

export let listaCarros: Array<Carro> = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av Paulista', listaCarros)



let cliente = new Pessoa('Carlos Alberto', 'Corsa')

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {

    if(carro['modelo'] == cliente.dizerCarroPreferido()) {
      
         cliente.comprarCarro(carro)
       
    }
 
    else {
        return 'Não tem esse carro'
    }
   
})
console.log(cliente.dizerCarroQueTem())
    

