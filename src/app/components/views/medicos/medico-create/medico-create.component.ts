import { MedicoService } from '../medico.service';
import { Component, OnInit } from '@angular/core';
import { Medico } from '../medico-read/medico.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-medico-create',
  templateUrl: './medico-create.component.html',
  styleUrls: ['./medico-create.component.css']
})
export class MedicoCreateComponent implements OnInit {

    medico: Medico ={
    nome: '',
    especialidade: ''
  }

  constructor(private service: MedicoService, private router: Router) { }

  ngOnInit(): void {
  }

    create() :void {
      this.service.create(this.medico).subscribe((resposta)=>{
        this.router.navigate(['medicos'])
        this.service.mensagem('Medico criada com Sucesso !');
      },err =>{
        for(let i = 0; i < err.error.errors.length;i++){
          this.service.mensagem(err.error.errors[i].message)
        }
        
      });
    }

    CancelParaMedico() :void {
      this.router.navigate(["medicos"])
    }
}
