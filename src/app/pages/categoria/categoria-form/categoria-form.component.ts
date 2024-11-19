import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Categoria} from "../categoria";
import {CategoriaService} from "../categoria.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-categoria-form',
    templateUrl: './categoria-form.component.html',
    styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent implements OnInit {

    formulario!: FormGroup;
    categoria!: Categoria;
    categorias: Categoria[] = [];

    title!: string;

    constructor(private formBuilder: FormBuilder,
                private service: CategoriaService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.data.subscribe((data) => {
            if (data['categoria']) {
                this.categoria = data['categoria'];
                this.preencherForm(this.categoria);
            } else {
                this.formulario = this.criarForm();
            }
        });

        this.title = this.route.snapshot.data[0]['title'];
    }

    private criarForm(): FormGroup {
        return this.formBuilder.group({
            nome: ['', Validators.required],
            pai: ['']
        });
    }

    private preencherForm(categoria: Categoria): void {
        this.formulario = this.formBuilder.group({
            id: [categoria.id, Validators.required],
            nome: [categoria.nome, Validators.required],
            pai: [categoria.pai]
        });
    }

    salvar() {
        return this.service.save(this.formulario.value)
            .subscribe(() => {
                this.router.navigate(['categorias']).then();
            });
    }

    excluir(id: number) {
        return this.service.remove(id)
            .subscribe(() => {
                this.router.navigate(['categorias']).then();
            });
    }

    search(event: any) {
        return this.service.getAll(event.query).subscribe(data => {
            this.categorias = data.content;
        });
    }
}
