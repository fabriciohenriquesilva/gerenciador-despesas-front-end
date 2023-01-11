import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../Pessoa';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-listar-pessoas',
  templateUrl: './listar-pessoas.component.html',
  styleUrls: ['./listar-pessoas.component.css']
})
export class ListarCredoresComponent implements OnInit {

  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.pessoaService.listar()
      .subscribe((response) => {
        this.pessoas = response['content'];
      });
  }

}
