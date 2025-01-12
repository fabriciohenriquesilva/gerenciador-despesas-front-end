import {Categoria} from "../../categoria/categoria";
import {TipoMovimentoFinanceiro} from "./tipo-movimento-financeiro";
import {BaseEntity} from "../../../core/models/base-entity";

export interface MovimentoFinanceiro extends BaseEntity {

    id: number;

    descricao: string;

    valor: number;

    tipoMovimentoFinanceiro: TipoMovimentoFinanceiro;

    data: Date;

    quantidadeParcelas: number;

    categoria: Categoria;

    // List<ParcelaDTO> parcelas;
}
