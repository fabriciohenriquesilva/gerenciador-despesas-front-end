import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-cadastrar-categoria',
  templateUrl: './cadastrar-categoria.component.html',
  styleUrls: ['./cadastrar-categoria.component.css']
})
export class CadastrarCategoriaComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: CategoriaService,
    private router: Router) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  cadastrar() {
    if(this.formulario.valid) {
      this.service.cadastrar(this.formulario.value).subscribe(() => {
        this.router.navigate(['categorias']);
      });
    }
  }

}
