import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private service: CategoriaService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe( categoria => {
      this.formulario = this.formBuilder.group({
        id: [categoria.id, Validators.required],
        nome: [categoria.nome, Validators.required]
      });
    });
  }

  cadastrar() {
    if(this.formulario.valid) {
      this.service.cadastrar(this.formulario.value).subscribe( ()=> {
        this.router.navigate(['categorias']);
      });
    }
  }

  editar() {
    if(this.formulario.valid) {
      this.service.editar(this.formulario.value).subscribe( ()=> {
        this.router.navigate(['categorias']);
      });
    }
  }
  
  excluir() {
    this.service.excluir(this.formulario.get('id')?.value).subscribe(() => {
      this.router.navigate(['categorias']);
    });
  }
}
