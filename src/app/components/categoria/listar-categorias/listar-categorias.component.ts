import { Component, OnInit } from '@angular/core';
import { Page } from '../../Page';
import { Categoria } from '../Categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.css']
})
export class ListarCategoriasComponent implements OnInit {

  page!: Page<Categoria>; 

  constructor(private service: CategoriaService) { }

  ngOnInit(): void {
    this.service.listar().subscribe( response => {
      this.page = response;
    });
  }

  trocarPagina(pagina: number) {
    this.service.listar(pagina).subscribe( response => {
      this.page = response;
    });
  }
}
