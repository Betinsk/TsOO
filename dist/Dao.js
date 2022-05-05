"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dao = void 0;
class Dao {
    constructor() {
        this.nomeTabela = '';
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
        return Object();
    }
    selecionar(id) {
        throw new Error('Method not implemented.');
    }
    selecionarTodos() {
        throw new Error('Method not implemented.');
    }
}
exports.Dao = Dao;
