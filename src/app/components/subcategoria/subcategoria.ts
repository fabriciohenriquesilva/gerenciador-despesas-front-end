import {Categoria} from "../categoria/categoria";

export interface Subcategoria {
  id: number,
  nome: string,
  categoria: Categoria
}
