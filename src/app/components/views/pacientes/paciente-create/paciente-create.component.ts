import { PacienteService } from '../paciente.service';
import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente-read/paciente.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-paciente-create',
  templateUrl: './paciente-create.component.html',
  styleUrls: ['./paciente-create.component.css']
})
export class PacienteCreateComponent implements OnInit {

  paciente: Paciente ={
    nome: '',
    cpf: '',
    medico: '',
    ultimaPrescricao: '',
    status: '',
    endereco: ''
  }

  constructor(private service: PacienteService, private router: Router) { }

  ngOnInit(): void {
  }

    create() :void { //console.log('>>>>', this.paciente)
      this.service.create(this.paciente).subscribe((resposta)=>{
        // console.log('>>>>',this.paciente)
        this.router.navigate(['pacientes'])
        this.service.mensagem('Paciente criada com Sucesso !');
      },err =>{
        for(let i = 0; i < err.error.errors.length;i++){
          this.service.mensagem(err.error.errors[i].message)
        }
        
      });
    }

    CancelParaPaciente() :void {
      this.router.navigate(["pacientes"])
    }
}
