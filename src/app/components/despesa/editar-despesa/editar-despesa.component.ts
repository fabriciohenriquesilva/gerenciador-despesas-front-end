import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Categoria } from '../../categoria/Categoria';
import { Page } from '../../Page';
import { Subcategoria } from '../../subcategoria/Subcategoria';
import { DespesaService } from '../despesa.service';

@Component({
  selector: 'app-editar-despesa',
  templateUrl: './editar-despesa.component.html',
  styleUrls: ['./editar-despesa.component.css']
})
export class EditarDespesaComponent implements OnInit {

  formulario!: FormGroup;
  categorias$!: Observable<Page<Categoria>>;
  subcategorias!: Observable<Subcategoria[]>;
  credorNome: string = '';
  subcategoria!: number;

  constructor(
    private route: ActivatedRoute,
    private service: DespesaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private currencyPipe: CurrencyPipe
  ) { }

  ngOnInit(): void {
    this.buscarCategorias();
    const id = this.route.snapshot.paramMap.get('id');

    this.service.buscarPorId(parseInt(id!)).subscribe( despesa => {
      this.formulario = this.formBuilder.group({
        id: [despesa.id],
        descricao: [despesa.descricao, Validators.compose([
          Validators.required
        ])],
        valorGasto: [despesa.valorGasto, Validators.compose([
          Validators.required
        ])],
        credor: [despesa.credor?.id, Validators.compose([
          Validators.required
        ])],
        dataDespesa: [despesa.dataDespesa, Validators.compose([
          Validators.required
        ])],
        categoria: [despesa.categoria?.id, Validators.compose([
          Validators.required
        ])],
        subcategoria: [despesa.subcategoria?.id, Validators.compose([
          Validators.required
        ])]
      });
      this.credorNome = despesa.credor?.nome || '';
      this.subcategorias = this.service.buscarSubcategorias(despesa.categoria.id);
      this.formulario.patchValue({ valorGasto: this.currencyPipe.transform(despesa.valorGasto, 'BRL', '')});
    });
  }

  editarDespesa() {
    // console.log(this.formulario.value);
    if(this.formulario.valid) {
      this.service.editar(this.formulario.value).subscribe( () => {
        this.router.navigate(['despesas/listar']);
      });
    }
  }

  buscarCategorias() {
    this.categorias$ = this.service.buscarCategorias();
  }

  buscarSubcategorias(categoriaId: number) {
    this.subcategorias = this.service.buscarSubcategorias(categoriaId);
  }

  buscarCredor(credorId: number) {
    this.service.buscarCredor(credorId).subscribe( credor => {
      console.log(credor);
      this.credorNome = credor.nome;
    });
  }

}
