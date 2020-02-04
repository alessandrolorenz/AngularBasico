import { Component } from '@angular/core';
import { UsuariosService } from './usuarios.services';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styles: [``]
  // providers: [
  //   UsuariosService // ou coloca no app.module
  // ]
})

export class AppComponent {
  
  pessoas : any = [];
  
  constructor(private usuariosserviço : UsuariosService){
    this.pessoas = usuariosserviço.getUsuarios();
  }

  coisa = {
    nome: "Pedro",
    idade: 30
  };

  meuFormulario = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });


}
