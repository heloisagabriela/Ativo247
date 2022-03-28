import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medico } from '../medico-read/medico.model';
import { MedicoService } from '../medico.service';

@Component({
  selector: 'app-medico-update',
  templateUrl: './medico-update.component.html',
  styleUrls: ['./medico-update.component.css']
})
export class MedicoUpdateComponent implements OnInit {

  medico: Medico ={
    id:'',
    nome: '',
    especialidade: ''
  }
  

  constructor(private service: MedicoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.medico.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }
  
  findById() : void {
    this.service.findById(this.medico.id!).subscribe((resposta)=> {
      this.medico.nome = resposta.nome
      this.medico.especialidade = resposta.especialidade
      
    })
}

update(): void{
  this.service.update(this.medico).subscribe((resposta) =>{
    this.router.navigate(['medicos'])
    this.service.mensagem("Medico atualizada com sucesso!")
  }, err => {
    this.service.mensagem("Valide se todos os campos estão preenchidos corretamente!")
  })
}

updateCancel(): void {
  this.router.navigate(['medicos'])
}

}