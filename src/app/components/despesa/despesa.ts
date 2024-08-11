import {Categoria} from "../categoria/categoria";
import {Pessoa} from "../pessoa/pessoa";
import {Subcategoria} from "../subcategoria/subcategoria";

export interface Despesa {
    id?: number;
    descricao: string;
    dataDespesa: Date;
    valorGasto: number;
    categoria: Categoria;
    subcategoria: Subcategoria;
    credor: Pessoa;
}
