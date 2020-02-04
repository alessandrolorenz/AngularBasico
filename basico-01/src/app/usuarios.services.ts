import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  getUsuarios(){
    return [
      {
        "nome": "Ale",
        "idade": 35,
        "hobby": 'seda'
      },
      {
        "nome": "Santo",
        "idade": 35,
        "hobby": 'seda'
      },
      {
        "nome": "Pedro",
        "idade": 35,
        "hobby": 'algodão'
      },
    ]
  }
}