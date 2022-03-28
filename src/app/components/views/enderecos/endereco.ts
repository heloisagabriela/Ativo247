import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Endereco } from './endereco-read-all/endereco.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  baseUrl: String = environment.baseUrl 

  constructor(private http: HttpClient,private _snack: MatSnackBar) { }

  findAllByEndereco(id_cat : String) :Observable<Endereco[]> {
    const url = `${this.baseUrl}enderecos?endereco=${id_cat}`
    return this.http.get<Endereco[]>(url)
  }

  findById(id: String) :Observable<Endereco>{
    const url = `${this.baseUrl}enderecos/${id}`
    return this.http.get<Endereco>(url);
  } 

  create(endereco: Endereco, id_cat: String) :Observable<Endereco> {
    const url = `${this.baseUrl}enderecos?endereco=${id_cat}`
    return this.http.post<Endereco>(url, endereco)
  }

  update(endereco: Endereco) :Observable<Endereco> {
    const url = `${this.baseUrl}enderecos/${endereco.id}`
    return this.http.put<Endereco>(url, endereco)
  }

  delete (id: String) :Observable<void> {
    const url = `${this.baseUrl}enderecos/${id}`
    return this.http.delete<void>(url)
  }
  
  mensagem(str: String): void {

    this._snack.open(`${str}`,'OK',{
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })

}

}
