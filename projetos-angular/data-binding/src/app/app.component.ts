import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';
  nome = "Anya"
  idade = 6

  lancarDado() : number{ // tipagem estática do typescript
    return Math.random() * 6
  }

  adicionar():void{
    console.log("Adicionando...")
  }

  alterarNome(event){
    console.log(event.target)
    this.nome = event.target.value
  }

  reload(){
    location.reload()
  }

}
