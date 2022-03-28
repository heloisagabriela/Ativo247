import { environment } from '../../../../environments/environment';
import { Medicamento } from './medicamento-read/medicamento.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicamentoCreateComponent } from './medicamento-create/medicamento-create.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Medicamento[]> {
    const url = this.baseUrl + "medicamentos"
    
    return this.http.get<Medicamento[]>(url);

  }

  findById(id: String) :Observable<Medicamento>{
    const url = `${this.baseUrl}/medicamentos/${id}`
    return this.http.get<Medicamento>(url);
  } 

  create(medicamento: Medicamento): Observable<Medicamento>{
    const url = this.baseUrl + "medicamentos"
    return this.http.post<Medicamento>(url, medicamento);

  }

  delete(id: String): Observable<void> {
    const url = `${this.baseUrl}/medicamentos/${id}`
    return this.http.delete<void>(url)
  }

  update(medicamento: Medicamento): Observable<void>{
    const url = `${this.baseUrl}/medicamentos/${medicamento.id}`
    return this.http.put<void>(url,medicamento)
  }

  mensagem(str: String): void {

    this._snack.open(`${str}`,'OK',{
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }



}
