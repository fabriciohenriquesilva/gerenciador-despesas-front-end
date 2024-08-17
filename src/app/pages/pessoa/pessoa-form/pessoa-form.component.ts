import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PessoaService} from "../pessoa.service";
import {Pessoa} from "../pessoa";

@Component({
    selector: 'app-pessoa-form',
    templateUrl: './pessoa-form.component.html',
    styleUrls: ['./pessoa-form.component.scss']
})
export class PessoaFormComponent implements OnInit {

    formulario!: FormGroup;
    tipoDocumento: string = 'CPF';

    title!: string;
    action!: string;

    constructor(private _formBuilder: FormBuilder,
                private _service: PessoaService,
                private _router: Router,
                private _route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this._route.data.subscribe((data) => {
            if (data['pessoa']) {
                const pessoa = data['pessoa'];
                this.preencherForm(pessoa);
            } else {
                this.formulario = this.criarForm();
            }
        });

        this.title = this._route.snapshot.data[0]['title'];
        this.action = this._route.snapshot.data[0]['action'];
    }

    cadastrarPessoa() {

        this.limparCaracteresDoCodigoDocumento();
        this.formulario.get('tipoDocumento')?.setValue(this.tipoDocumento);

        if (this.formulario.valid) {
            this._service.save(this.formulario.value).subscribe(() => {
                this._router.navigate(['pessoas']);
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
        if (tipoPessoa === 'PF') {
            this.tipoDocumento = 'CPF';
        }
        if (tipoPessoa === 'PJ') {
            this.tipoDocumento = 'CNPJ';
        }
    }

    private criarForm(): FormGroup {
        return this._formBuilder.group({
            nome: ['', Validators.required],
            tipoPessoa: ['', Validators.required],
            tipoDocumento: ['', Validators.required],
            codigoDocumento: '',
        });
    }

    private preencherForm(pessoa: Pessoa) {
        this.formulario = this._formBuilder.group({
            id: [pessoa.id, Validators.required],
            nome: [pessoa.nome, Validators.required],
            tipoPessoa: [pessoa.tipoPessoa, Validators.required],
            tipoDocumento: [pessoa.tipoDocumento, Validators.required],
            codigoDocumento: pessoa.codigoDocumento,
        });
    }

    excluir(id: number) {
        return this._service.remove(id)
            .subscribe(() => {
                this._router.navigate(['pessoas'])
            });
    }

}
