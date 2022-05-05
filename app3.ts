import Carro from "./Carro";
import Moto from "./Moto";
import {Concessionaria} from './Concessionaria'

let carro = new Carro('Ferrari', 3)

let moto = new Moto('Harley')

carro.acelerar()
moto.acelerar()

let concessionaria = new Concessionaria('', [])

console.log(concessionaria.fornecerHorariosDeFunciomento())

console.log(carro)
console.log(moto)
