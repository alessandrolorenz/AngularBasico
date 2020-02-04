import { Component } from '@angular/core';

@Component({
  selector: 'cursos',
  template: `
  <h1>{{ mensagem }} </h1>
  <h5> ps usar a crase para dentro de @Component usar muitas linhas </h5>
  `,
  styles: ['']
})

export class CursosComponent {
  mensagem = "Modulo cursos criado manualmente"
}