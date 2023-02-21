import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subcategoria } from '../../subcategoria/Subcategoria';
import { Categoria } from '../../categoria/Categoria';
import { DespesaService } from '../despesa.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastrar-depesa',
  templateUrl: './cadastrar-depesa.component.html',
  styleUrls: ['./cadastrar-depesa.component.css']
})
export class CadastrarDepesaComponent implements OnInit {

  formulario!: FormGroup;
  categorias!: Observable<Categoria[]>;
  subcategorias!: Subcategoria[];
  credorNome: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private service: DespesaService,
    private router: Router ) { }

  ngOnInit(): void {
    this.initForm();    
    this.buscarCategorias();
  }

  initForm() {
    this.formulario = this.formBuilder.group({
      descricao: ['', Validators.compose([
        Validators.required
      ])],
      valorGasto: ['', Validators.compose([
        Validators.required
      ])],
      credor: ['', Validators.compose([
        Validators.required
      ])],
      dataDespesa: ['', Validators.compose([
        Validators.required
      ])],
      categoria: ['', Validators.compose([
        Validators.required
      ])],
      subcategoria: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  cadastrarDespesa() {
    console.log(this.formulario.value);

    if(this.formulario.valid) {
      this.service.cadastrar(this.formulario.value).subscribe( () => {
        this.router.navigate(['despesas/listar']);
      });
    }
  }

  buscarCategorias() {
    this.categorias = this.service.buscarCategorias();
  }

  buscarSubcategorias(categoriaId: number) {
    console.log(categoriaId);
    this.service.buscarSubcategorias(categoriaId).subscribe( (subcategorias) => {
      this.subcategorias = subcategorias;
    });
  }

  buscarCredor(credorId: number) {
    this.service.buscarCredor(credorId).subscribe( credor => {
      console.log(credor);
      this.credorNome = credor.nome;
    });
  }
}
