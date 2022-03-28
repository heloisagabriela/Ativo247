import { PrescricaoService } from '../prescricao.service';
import { Component, OnInit } from '@angular/core';
import { Prescricao } from '../prescricao-read/prescricao.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-prescricao-create',
  templateUrl: './prescricao-create.component.html',
  styleUrls: ['./prescricao-create.component.css']
})
export class PrescricaoCreateComponent implements OnInit {

  prescricao: Prescricao ={
    nome: '',
    remedio: '',
    descricao: '',
    medico: ''
  }

  constructor(private service: PrescricaoService, private router: Router) { }

  ngOnInit(): void {
  }

    create() :void {
      this.service.create(this.prescricao).subscribe((resposta)=>{
        this.router.navigate(['prescricoes'])
        this.service.mensagem('Prescricao criada com Sucesso !');
      },err =>{
        for(let i = 0; i < err.error.errors.length;i++){
          this.service.mensagem(err.error.errors[i].message)
        }
        
      });
    }

    CancelParaPrescricao() :void {
      this.router.navigate(["prescricoes"])
    }
}
