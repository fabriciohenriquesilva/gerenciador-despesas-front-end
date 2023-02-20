import { Categoria } from "../categoria/Categoria";

export interface Despesa {
    id?: number;
    descricao: string;
    dataDespesa: Date;
    valorGasto: number;
    categoria: Categoria;
}