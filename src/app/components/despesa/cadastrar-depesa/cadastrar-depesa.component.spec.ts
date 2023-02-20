import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarDepesaComponent } from './cadastrar-depesa.component';

describe('CadastrarDepesaComponent', () => {
  let component: CadastrarDepesaComponent;
  let fixture: ComponentFixture<CadastrarDepesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarDepesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarDepesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
