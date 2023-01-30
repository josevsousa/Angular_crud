import { Component } from '@angular/core';
import { Icarro } from './carro';
import { CarroService } from './carro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dicas-crud';

  constructor(private carroService: CarroService){}

  // Usando Promisse
  obterCarros(){
   this.carroService.obterCarros()
    .then(carros => console.log(carros))  
    .catch(error => console.log(error))
  }

  /*
  // Usando Obaservable
  obterCarros(){
   this.carroService.obterCarros()
    .subscribe(carros => console.log(carros))
  }
  */

  //----------------------------------------------------------

  obterCarro(){
    return this.carroService.obterCarro(2)
      .subscribe(carro => console.log(carro))
  }

  //---------------------------------------------------------

  addCarro(): void{
    const carro: Icarro = {
     marca: "ddd",
     nome: "BMWW" 
    };

    this.carroService.addCarro(carro)
      .subscribe(carro => console.log(carro))
  }


  atualizarCarro(): void{
    const carro: Icarro = {
      id: 1,
      marca: "ddd",
      nome: "LAM" 
     };

    this.carroService.atualizarCarro(carro)
     .subscribe(carro => console.log(carro));
  }

  deleteCarro(){
    this.carroService.deleteCarro(3)
      .subscribe(res => console.log(res + "deletado"));
  }

}
