import { Component } from '@angular/core';
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
}
