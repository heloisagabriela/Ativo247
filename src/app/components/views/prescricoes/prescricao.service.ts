import { environment } from '../../../../environments/environment';
import { Prescricao } from './prescricao-read/prescricao.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrescricaoCreateComponent } from './prescricao-create/prescricao-create.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class PrescricaoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll(): Observable<Prescricao[]> {
    const url = this.baseUrl + "prescricoes"

    return this.http.get<Prescricao[]>(url);

  }

  findById(id: String): Observable<Prescricao> {
    const url = `${this.baseUrl}/prescricoes/${id}`
    return this.http.get<Prescricao>(url);
  }

  create(prescricao: Prescricao): Observable<Prescricao> {
    const url = this.baseUrl + "prescricoes"
    return this.http.post<Prescricao>(url, prescricao);

  }

  delete(id: String): Observable<void> {
    const url = `${this.baseUrl}/prescricoes/${id}`
    return this.http.delete<void>(url)
  }

  update(prescricao: Prescricao): Observable<void> {
    const url = `${this.baseUrl}/prescricoes/${prescricao.id}`
    return this.http.put<void>(url, prescricao)
  }

  mensagem(str: String): void {

    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }



}
