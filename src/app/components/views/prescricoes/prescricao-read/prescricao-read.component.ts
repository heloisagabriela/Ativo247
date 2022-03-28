import { Prescricao } from './prescricao.model';
import { PrescricaoService } from '../prescricao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prescricao-read',
  templateUrl: './prescricao-read.component.html',
  styleUrls: ['./prescricao-read.component.css']
})
export class PrescricaoReadComponent implements OnInit {
  
  prescricoes: Prescricao[] =[];
  displayedColumns: string[] = ['id', 'nome', 'remedio', 'descricao', 'medico','acoes'];

  constructor(private service: PrescricaoService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
      this.service.findAll().subscribe(resposta =>{
        this.prescricoes = resposta; 
      })  
  }

  navegarParaPrescricaoCreate(){
    this.router.navigate(["prescricoes/create"])
  }

  

}
