import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {

  formulario!: FormGroup;
  tipoDocumento!: string;

  constructor(
    private service: PessoaService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.service.buscarPorId(parseInt(id!)).subscribe((pessoa) => {
      this.formulario = this.formBuilder.group({
        id: [pessoa.id, Validators.compose([Validators.required])],
        nome: [pessoa.nome, Validators.compose([Validators.required])],
        tipoPessoa: [pessoa.tipoPessoa, Validators.compose([Validators.required])],
        tipoDocumento: [pessoa.tipoDocumento, Validators.compose([Validators.required])],
        codigoDocumento: [pessoa.codigoDocumento, Validators.compose([
          Validators.required,
          Validators.pattern(/^\d{11}$|^\d{14}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$|^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/)
        ])]
      });
      this.definirTipoDocumento();
    });
  }

  definirTipoDocumento() {
    let tipoPessoa = this.formulario.get('tipoPessoa')?.value;
    if(tipoPessoa === 'PF') {
      this.tipoDocumento = 'CPF';
    }
    if(tipoPessoa === 'PJ') {
      this.tipoDocumento = 'CNPJ';
    }
  }

  editar() {
    this.limparCaracteresDoCodigoDocumento();

    if(this.formulario.valid) {
      this.service.editar(this.formulario.value).subscribe(() => {
        this.router.navigate(['pessoas']);
      });
    }
  }

  limparCaracteresDoCodigoDocumento() {
    this.formulario.get('codigoDocumento')?.setValue(this.formulario.get('codigoDocumento')?.value.replaceAll('.', ''));
    this.formulario.get('codigoDocumento')?.setValue(this.formulario.get('codigoDocumento')?.value.replaceAll('-', ''));
    this.formulario.get('codigoDocumento')?.setValue(this.formulario.get('codigoDocumento')?.value.replaceAll('/', ''));
    this.formulario.get('codigoDocumento')?.setValue(this.formulario.get('codigoDocumento')?.value.replaceAll(',', ''));
  }

  excluir() {
    this.service.excluir(this.formulario.get('id')?.value).subscribe(() => {
      this.router.navigate(['pessoas']);
    });
  }
}
