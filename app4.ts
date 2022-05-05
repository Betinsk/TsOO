import { ConcessionariaDao } from "./ConcessionariaDao";
import Concessionaria from "./Concessionaria"
import { PessoaDao } from "./PessoaDao";
import Pessoa from "./Pessoa";
import { Dao } from "./Dao";


//let dao: ConcessionariaDao = new ConcessionariaDao()
//let dao2 : PessoaDao = new PessoaDao

let concessionaria = new Concessionaria('', [])
let pessoa: Pessoa = new Pessoa('Carlos', '')

let dao3: Dao<Concessionaria> = new Dao<Concessionaria>()
let dao4: Dao<Pessoa> = new Dao<Pessoa>()

dao3.inserir(concessionaria)
dao4.remover(4)

