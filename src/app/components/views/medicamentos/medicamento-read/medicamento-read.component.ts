import { Medicamento } from './medicamento.model';
import { MedicamentoService } from '../medicamento.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicamento-read',
  templateUrl: './medicamento-read.component.html',
  styleUrls: ['./medicamento-read.component.css']
})
export class MedicamentoReadComponent implements OnInit {
  
  medicamentos: Medicamento[] =[];
  displayedColumns: string[] = ['id', 'nome', 'descricao','acoes'];

  constructor(private service: MedicamentoService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
      this.service.findAll().subscribe(resposta =>{
        this.medicamentos = resposta; 
      })  
  }

  navegarParaMedicamentoCreate(){
    this.router.navigate(["medicamentos/create"])
  }

  

}
