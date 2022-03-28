import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prescricao } from '../prescricao-read/prescricao.model';
import { PrescricaoService } from '../prescricao.service';

@Component({
  selector: 'app-prescricao-update',
  templateUrl: './prescricao-update.component.html',
  styleUrls: ['./prescricao-update.component.css']
})
export class PrescricaoUpdateComponent implements OnInit {

  prescricao: Prescricao ={
    id:'',
    nome: '',
    remedio: '',
    descricao: '',
    medico: ''
  }
  

  constructor(private service: PrescricaoService, private route: ActivatedRoute, private router: Router) { }

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

update(): void{
  this.service.update(this.prescricao).subscribe((resposta) =>{
    this.router.navigate(['prescricoes'])
    this.service.mensagem("Prescricao atualizada com sucesso!")
  }, err => {
    this.service.mensagem("Valide se todos os campos estão preenchidos corretamente!")
  })
}

updateCancel(): void {
  this.router.navigate(['prescricoes'])
}

}