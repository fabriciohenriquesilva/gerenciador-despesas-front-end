import {Categoria} from "../categoria/categoria";
import {Pessoa} from "../pessoa/pessoa";

export interface Despesa {
    id?: number;
    descricao: string;
    dataDespesa: Date;
    valorGasto: number;
    categoria: Categoria;
    credor: Pessoa;
}
