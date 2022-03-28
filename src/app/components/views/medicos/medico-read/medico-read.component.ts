import { Medico } from './medico.model';
import { MedicoService } from '../medico.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medico-read',
  templateUrl: './medico-read.component.html',
  styleUrls: ['./medico-read.component.css']
})
export class MedicoReadComponent implements OnInit {
  
  medicos: Medico[] =[];
  displayedColumns: string[] = ['id', 'nome', 'especialidade', 'acoes'];

  constructor(private service: MedicoService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
      this.service.findAll().subscribe(resposta =>{
        this.medicos = resposta; 
      })  
  }

  navegarParaMedicoCreate(){
    this.router.navigate(["medicos/create"])
  }

  

}
