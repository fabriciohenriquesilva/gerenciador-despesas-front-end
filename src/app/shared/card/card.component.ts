import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input({required: true})
  titulo!: string;

  @Input({required: true})
  descricao!: string;

  @Input()
  icone!: string;

}
