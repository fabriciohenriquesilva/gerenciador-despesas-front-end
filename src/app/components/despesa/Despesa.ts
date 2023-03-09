import { Categoria } from "../categoria/Categoria";
import { Pessoa } from "../pessoa/Pessoa";
import { Subcategoria } from "../subcategoria/Subcategoria";

export interface Despesa {
    id?: number;
    descricao: string;
    dataDespesa: Date;
    valorGasto: number;
    categoria: Categoria;
    subcategoria: Subcategoria;
    credor: Pessoa;
}