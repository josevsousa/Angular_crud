import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_PATH } from './environments/environment';
import { Icarro } from './carro';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarroService {

  // existe outros clients de http como o axis 'por exemplo'
  constructor(private httpClient: HttpClient) { }

  /*
    O get() Observable retorna um todos os objetos
  */

  /* 
    O get<any[]> Promisse retorna um array 
    para transformar o return em um promisse é preciso add o toPromisse() no final do return 
  */

  // Usando Promisse
  obterCarros(){
    // return this.httpClient.get(`${API_PATH}carros`)
    return this.httpClient.get<Icarro[]>(`${API_PATH}carros`).toPromise();  
  }

  /*
  // Usando Observable
  obterCarros(): Observable<Icarro[]>{
    // return this.httpClient.get(`${API_PATH}carros`)
    return this.httpClient.get<Icarro[]>(`${API_PATH}carros`);  
  }
  */

  //====================================================================

  obterCarro(id: number): Observable<Icarro>{
    return this.httpClient.get<Icarro>(`${API_PATH}carros/${id}`);
  }

  addCarro(carro: Icarro): Observable<Icarro>{
    return this.httpClient.post<Icarro>(`${API_PATH}carros`, carro);
  }

  atualizarCarro(carro: Icarro): Observable<Icarro>{
    return this.httpClient.put<Icarro>(`${API_PATH}carros/${carro.id}`, carro);
  }
   
  deleteCarro(carroId: number): Observable<void>{
    return this.httpClient.delete<void>(`${API_PATH}carros/${carroId}`)
  }

}
