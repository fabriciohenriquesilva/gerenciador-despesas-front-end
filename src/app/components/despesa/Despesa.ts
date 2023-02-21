import { Categoria } from "../categoria/Categoria";
import { Pessoa } from "../pessoa/Pessoa";

export interface Despesa {
    id?: number;
    descricao: string;
    dataDespesa: Date;
    valorGasto: number;
    categoria: Categoria;
    credor: Pessoa;
}