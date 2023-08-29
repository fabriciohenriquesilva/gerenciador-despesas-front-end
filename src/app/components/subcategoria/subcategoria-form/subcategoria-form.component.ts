import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {Categoria} from "../../categoria/categoria";
import {Page} from "../../Page";
import {SubcategoriaService} from "../subcategoria.service";
import {CategoriaService} from "../../categoria/categoria.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subcategoria} from "../subcategoria";

@Component({
  selector: 'app-subcategoria-form',
  templateUrl: './subcategoria-form.component.html',
  styleUrls: ['./subcategoria-form.component.scss']
})
export class SubcategoriaFormComponent implements OnInit {

  formulario!: FormGroup;
  categorias$!: Observable<Page<Categoria>>;
  subcategoria!: Subcategoria;

  constructor(private _formBuilder: FormBuilder,
              private _service: SubcategoriaService,
              private _categoriaService: CategoriaService,
              private _router: Router,
              private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._route.data.subscribe((data) => {
      if (data['subcategoria']) {
        this.subcategoria = data['subcategoria'];
        this.preencherForm(this.subcategoria);
      } else {
        this.formulario = this.criarForm();
      }
    })

    this.categorias$ = this.buscarCategorias();
  }

  private criarForm(): FormGroup {
    return this._formBuilder.group({
      nome: ['', Validators.required],
      categoria: ['', Validators.required]
    });
  }

  private preencherForm(subcategoria: Subcategoria) {
    this.formulario = this._formBuilder.group({
      id: [subcategoria.id, Validators.required],
      nome: [subcategoria.nome, Validators.required],
      categoria: [subcategoria.categoria?.id, Validators.required]
    });
  }

  private buscarCategorias(): Observable<Page<Categoria>> {
    return this._categoriaService.listar();
  }

  salvar() {
    console.log(this.formulario.value)
    this._service.save(this.formulario.value).subscribe(() => {
      this._router.navigate(['subcategorias']);
    });
  }

}
