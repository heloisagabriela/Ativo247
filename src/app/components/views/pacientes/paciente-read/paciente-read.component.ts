import { Paciente } from './paciente.model';
import { PacienteService } from '../paciente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente-read',
  templateUrl: './paciente-read.component.html',
  styleUrls: ['./paciente-read.component.css']
})
export class PacienteReadComponent implements OnInit {
  
  pacientes: Paciente[] =[];
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'medico', 'ultimaPrescricao', 'status', 'endereco', 'acoes'];

  constructor(private service: PacienteService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
      this.service.findAll().subscribe(resposta =>{
        this.pacientes = resposta; 
      })  
  }

  navegarParaPacienteCreate(){
    this.router.navigate(["pacientes/create"])
  }

  

}
