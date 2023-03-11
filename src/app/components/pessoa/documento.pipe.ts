import { Pipe, PipeTransform } from '@angular/core';
import { Pessoa } from './Pessoa';

@Pipe({
  name: 'documento'
})
export class DocumentoPipe implements PipeTransform {

  transform(pessoa: Pessoa): string {
    let mascara = pessoa.mascaraDocumento;
    let codigo = pessoa.codigoDocumento;

    for(let i = 0; mascara.search('#') != -1; i++) {
      mascara = mascara.replace('#', codigo.charAt(i) );
    }
    return mascara;
  }

}
