import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../paciente-read/paciente.model';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-paciente-update',
  templateUrl: './paciente-update.component.html',
  styleUrls: ['./paciente-update.component.css']
})
export class PacienteUpdateComponent implements OnInit {

  paciente: Paciente = {
    id: '',
    nome: '',
    cpf: '',
    medico: '',
    ultimaPrescricao: '',
    status: '',
    endereco: ''
  }


  constructor(private service: PacienteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.paciente.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.paciente.id!).subscribe((resposta) => {
      this.paciente.nome = resposta.nome
      this.paciente.cpf = resposta.cpf
      this.paciente.medico = resposta.medico
      this.paciente.ultimaPrescricao = resposta.ultimaPrescricao
      this.paciente.status = resposta.status
      this.paciente.endereco = resposta.endereco

    })
  }

  update(): void {
    this.service.update(this.paciente).subscribe((resposta) => {
      this.router.navigate(['pacientes'])
      this.service.mensagem("Paciente atualizada com sucesso!")
    }, err => {
      this.service.mensagem("Valide se todos os campos estão preenchidos corretamente!")
    })
  }

  updateCancel(): void {
    this.router.navigate(['pacientes'])
  }

}