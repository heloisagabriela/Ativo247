import { environment } from '../../../../environments/environment';
import { Paciente } from './paciente-read/paciente.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { PacienteCreateComponent } from './paciente-create/paciente-create.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Paciente[]> {
    const url = this.baseUrl + "pacientes"
    
    return this.http.get<Paciente[]>(url);

  }

  findById(id: String) :Observable<Paciente>{
    const url = `${this.baseUrl}/pacientes/${id}`
    return this.http.get<Paciente>(url);
  } 

  create(paciente: Paciente): Observable<Paciente>{
    const url = this.baseUrl + "pacientes"
    console.log('>>>>>>>2',url)
    return this.http.post<Paciente>(url, paciente);

  }

  delete(id: String): Observable<void> {
    const url = `${this.baseUrl}/pacientes/${id}`
    return this.http.delete<void>(url)
  }

  update(paciente: Paciente): Observable<void>{
    const url = `${this.baseUrl}/pacientes/${paciente.id}`
    return this.http.put<void>(url,paciente)
  }

  mensagem(str: String): void {

    this._snack.open(`${str}`,'OK',{
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }



}
