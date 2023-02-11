import { Component, OnInit } from '@angular/core';
import { Page } from '../../Page';
import { Pessoa } from '../Pessoa';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-listar-pessoas',
  templateUrl: './listar-pessoas.component.html',
  styleUrls: ['./listar-pessoas.component.css']
})
export class ListarPessoasComponent implements OnInit {

  pessoas: Pessoa[] = [];
  page!: Page<Pessoa>;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.pessoaService.listar()
      .subscribe((response) => {
        this.page = response;
      });
  }

  trocarPagina(pagina: number) {
    this.pessoaService.listar(pagina)
      .subscribe( response => {
        this.page = response;
      });
  }

}
