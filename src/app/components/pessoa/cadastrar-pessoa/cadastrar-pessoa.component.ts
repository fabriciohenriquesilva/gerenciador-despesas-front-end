import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-cadastrar-pessoa',
  templateUrl: './cadastrar-pessoa.component.html',
  styleUrls: ['./cadastrar-pessoa.component.css']
})
export class CadastrarPessoaComponent implements OnInit {

  formulario!: FormGroup;
  tipoDocumento: string = 'CPF';

  constructor(private formBuilder: FormBuilder,
    private service: PessoaService,
    private router: Router) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.compose([
        Validators.required
      ])],
      tipoPessoa: ['PF', Validators.compose([
        Validators.required
      ])],
      tipoDocumento: ['CPF', Validators.compose([
        Validators.required
      ])],
      codigoDocumento: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^\d{11}$|^\d{14}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$|^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/)
      ])]
    });
  }

  cadastrarPessoa() {

    this.limparCaracteresDoCodigoDocumento();
    this.formulario.get('tipoDocumento')?.setValue(this.tipoDocumento);
      
    if(this.formulario.valid) {
      this.service.cadastrar(this.formulario.value).subscribe(() => {
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

  definirTipoDocumento() {
    let tipoPessoa = this.formulario.get('tipoPessoa')?.value;
    if(tipoPessoa === 'PF') {
      this.tipoDocumento = 'CPF';
    }
    if(tipoPessoa === 'PJ') {
      this.tipoDocumento = 'CNPJ';
    }
  }

}
