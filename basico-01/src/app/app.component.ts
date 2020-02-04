import { Component } from '@angular/core';
import { UsuariosService } from './usuarios.services';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styles: [``]
})

export class AppComponent {
  pessoas : any = [];
  constructor(){
    let usuarios = new UsuariosService;
    this.pessoas = usuarios.getUusuarios();

  }

  coisa = {
    nome: "Pedro",
    idade: 30
  }



}
