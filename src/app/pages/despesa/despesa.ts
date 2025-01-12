import {Categoria} from "../categoria/categoria";
import {Pessoa} from "../pessoa/pessoa";

export interface Despesa {
    id?: number;
    descricao: string;
    data: Date;
    valor: number;
    categoria: Categoria;
    credor: Pessoa;
}
