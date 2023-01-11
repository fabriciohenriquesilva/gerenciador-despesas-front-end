import { Pessoa } from "./pessoa/Pessoa";

export interface Page {
  content: Pessoa[];
  totalElements: number;
  last: boolean;
  totalPages: number;
  size: number;
  number: number;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}