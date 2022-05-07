import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numero:Number

  title = 'data-binding';
  nome = "Anya"
  idade = 6
  esconderCaixa = true

  escolher():void{
    this.numero = Math.round(Math.random() * 100)
  }

  lancarDado() : number{ // tipagem estática do typescript
    return Math.random() * 6
  }

  adicionar():void{
    console.log("Adicionando...")
    //this.nome = nomeInput.value
  }

  alterarNome(event){
    console.log(event.target)
    this.nome = event.target.value
  }

  // reload(){
  //   location.reload()
  // }

}
