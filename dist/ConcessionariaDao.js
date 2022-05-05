"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcessionariaDao = void 0;
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
class ConcessionariaDao {
    constructor() {
        this.nomeTabela = 'tb_concessionaria';
    }
    inserir(object) {
        console.log('Logica de insert');
        return true;
    }
    atualizar(object) {
        throw new Error('Method not implemented.');
    }
    remover(id) {
        console.log('Removido');
        return new Concessionaria_1.default('', []);
    }
    selecionar(id) {
        throw new Error('Method not implemented.');
    }
    selecionarTodos() {
        throw new Error('Method not implemented.');
    }
}
exports.ConcessionariaDao = ConcessionariaDao;
