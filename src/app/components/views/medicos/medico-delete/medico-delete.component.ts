import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Medico } from '../medico-read/medico.model';
import { MedicoService } from '../medico.service';

@Component({
  selector: 'app-medico-delete',
  templateUrl: './medico-delete.component.html',
  styleUrls: ['./medico-delete.component.css']
})
export class MedicoDeleteComponent implements OnInit {
  
  medico: Medico ={
    id:'',
    nome: '',
    especialidade: ''
  }

  constructor(private service: MedicoService, private router: Router,private route: ActivatedRoute) { }

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

  delete(): void{
    this.service.delete(this.medico.id!).subscribe((resposta)=> {
      this.router.navigate(['medicos'])  
      this.service.mensagem("Medico deletada com sucesso!")
    }, err =>{
      this.service.mensagem(err.error.error)
    })
  }

  deleteCancel(): void {
    this.router.navigate(['medicos'])
  }


}
