"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listaCarros = void 0;
const Carro_1 = __importDefault(require("./Carro"));
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
const Pessoa_1 = __importDefault(require("./Pessoa"));
let carroA = new Carro_1.default('Corsa', 4);
let carroB = new Carro_1.default('Ferrari', 4);
let carroC = new Carro_1.default('Lambo', 2);
exports.listaCarros = [carroA, carroB, carroC];
let concessionaria = new Concessionaria_1.default('Av Paulista', exports.listaCarros);
let cliente = new Pessoa_1.default('Carlos Alberto', 'Corsa');
concessionaria.mostrarListaDeCarros().map((carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
    else {
        return 'Não tem esse carro';
    }
});
console.log(cliente.dizerCarroQueTem());
