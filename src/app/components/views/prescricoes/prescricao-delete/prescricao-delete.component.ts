import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Prescricao } from '../prescricao-read/prescricao.model';
import { PrescricaoService } from '../prescricao.service';

@Component({
  selector: 'app-prescricao-delete',
  templateUrl: './prescricao-delete.component.html',
  styleUrls: ['./prescricao-delete.component.css']
})
export class PrescricaoDeleteComponent implements OnInit {
  
  prescricao: Prescricao ={
    id:'',
    nome: '',
    remedio: '',
    descricao: '',
    medico: ''
  }

  constructor(private service: PrescricaoService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.prescricao.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById() : void {
    this.service.findById(this.prescricao.id!).subscribe((resposta)=> {
      this.prescricao.nome = resposta.nome
      this.prescricao.remedio = resposta.remedio
      this.prescricao.descricao = resposta.descricao
      this.prescricao.medico = resposta.medico
      
    })
  }

  delete(): void{
    this.service.delete(this.prescricao.id!).subscribe((resposta)=> {
      this.router.navigate(['prescricoes'])  
      this.service.mensagem("Prescricao deletada com sucesso!")
    }, err =>{
      this.service.mensagem(err.error.error)
    })
  }

  deleteCancel(): void {
    this.router.navigate(['prescricoes'])
  }


}
