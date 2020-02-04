import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <p>data binding</p>
  <img src="{{imageURL}}"/>
  <p>prop binding - usa a por src da DOM entre colchetes sem parentesis na variavel</p>
  <img [src]="imageURL"/> 
<hr/>
<p>string interpolation</p>
  <button [disabled] = "buttonStatus">Botao1</button>
  <p>class binding</p>
  <button [class.active] = "isActive">Botao2</button>
  <p>style binding</p>
  <button [style.borderColor] = "isActive ? 'green' : 'blue'">Botao2</button>
  <p>DOM style object properties-list of props</p>
<hr/>
  <p>event binding</p>
  <button (click) = "save($event)">Clique e olhe o console</button> 
  <input type="text" (keyup) = "onKeyUp($event)"/>
  <input type="text" (keyup.enter) = "onKeyUp1()"/>
  <input type="text" (keyup.enter) = "onKeyUp2($event)"/>
  <p>template variable</p>
  <input type="text" (keyup.enter) = "onKeyUp3(nome.value)" #nome />
  

  `,
  styles: [`
    .active{
      background: green;
    }
  
  `]
})

export class AppComponent {
  title = 'hello-world';
  title1 = 'Yeap!!';
  imageURL = "https://avatars0.githubusercontent.com/u/38251182?s=400&u=93f470c75494e57adffc47d6eb9ce666df9e9aaf&v=4";
  buttonStatus = true;
  isActive = true;
  save(e){
    console.log(e);
  }

  onKeyUp(e) {
    if(e.keyCode === 13){
      console.log("enter foi pressionado");
    }
  }
  onKeyUp1() {
      console.log("enter foi pressionado");
  }
  onKeyUp2(e) {
      console.log(e.target.value);
  }
  onKeyUp3(nome) {
      console.log(nome);
  }



}
