"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaDao = void 0;
const Pessoa_1 = __importDefault(require("./Pessoa"));
class PessoaDao {
    constructor() {
        this.nomeTabela = 'tb_pessoa';
    }
    inserir(object) {
        console.log('Logica de insert');
        return true;
    }
    atualizar(object) {
        console.log('Logica de Pessoa');
        return true;
    }
    remover(id) {
        console.log('Removido');
        return new Pessoa_1.default('', '');
    }
    selecionar(id) {
        throw new Error('Method not implemented.');
    }
    selecionarTodos() {
        throw new Error('Method not implemented.');
    }
}
exports.PessoaDao = PessoaDao;
