import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Paciente } from '../paciente-read/paciente.model';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-paciente-delete',
  templateUrl: './paciente-delete.component.html',
  styleUrls: ['./paciente-delete.component.css']
})
export class PacienteDeleteComponent implements OnInit {
  
  paciente: Paciente ={
    id: '',
    nome: '',
    cpf: '',
    medico: '',
    ultimaPrescricao: '',
    status: '',
    endereco: ''
  }

  constructor(private service: PacienteService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.paciente.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById() : void {
    this.service.findById(this.paciente.id!).subscribe((resposta)=> {
      this.paciente.nome = resposta.nome
      this.paciente.cpf = resposta.cpf
      this.paciente.medico = resposta.medico
      this.paciente.ultimaPrescricao = resposta.ultimaPrescricao
      this.paciente.status = resposta.status
      this.paciente.endereco = resposta.endereco
      
    })
  }

  delete(): void{
    this.service.delete(this.paciente.id!).subscribe((resposta)=> {
      this.router.navigate(['pacientes'])  
      this.service.mensagem("Paciente deletado com sucesso!")
    }, err =>{
      this.service.mensagem(err.error.error)
    })
  }

  deleteCancel(): void {
    this.router.navigate(['pacientes'])
  }


}
