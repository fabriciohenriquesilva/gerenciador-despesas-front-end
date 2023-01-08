import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCredoresComponent } from './listar-pessoas.component';

describe('ListarCredoresComponent', () => {
  let component: ListarCredoresComponent;
  let fixture: ComponentFixture<ListarCredoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCredoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCredoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
