import { Categoria } from "../categoria/Categoria";

export interface Subcategoria {
    id: number,
    nome: string,
    categoria: Categoria
}