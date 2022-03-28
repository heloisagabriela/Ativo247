import { environment } from '../../../../environments/environment';
import { Medico } from './medico-read/medico.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { MedicoCreateComponent } from './medico-create/medico-create.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Medico[]> {
    const url = this.baseUrl + "medicos"
    
    return this.http.get<Medico[]>(url);

  }

  findById(id: String) :Observable<Medico>{
    const url = `${this.baseUrl}/medicos/${id}`
    return this.http.get<Medico>(url);
  } 

  create(medico: Medico): Observable<Medico>{
    const url = this.baseUrl + "medicos"
    return this.http.post<Medico>(url, medico);

  }

  delete(id: String): Observable<void> {
    const url = `${this.baseUrl}/medicos/${id}`
    return this.http.delete<void>(url)
  }

  update(medico: Medico): Observable<void>{
    const url = `${this.baseUrl}/medicos/${medico.id}`
    return this.http.put<void>(url,medico)
  }

  mensagem(str: String): void {

    this._snack.open(`${str}`,'OK',{
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }



}
