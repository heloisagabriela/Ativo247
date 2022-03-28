import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicamento } from '../medicamento-read/medicamento.model';
import { MedicamentoService } from '../medicamento.service';

@Component({
  selector: 'app-medicamento-update',
  templateUrl: './medicamento-update.component.html',
  styleUrls: ['./medicamento-update.component.css']
})
export class MedicamentoUpdateComponent implements OnInit {

  medicamento: Medicamento ={
    id:'',
    nome: '',
    descricao: ''
  }
  

  constructor(private service: MedicamentoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.medicamento.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }
  
  findById() : void {
    this.service.findById(this.medicamento.id!).subscribe((resposta)=> {
      this.medicamento.nome = resposta.nome
      this.medicamento.descricao = resposta.descricao
      
    })
}

update(): void{
  this.service.update(this.medicamento).subscribe((resposta) =>{
    this.router.navigate(['medicamentos'])
    this.service.mensagem("Medicamento atualizada com sucesso!")
  }, err => {
    this.service.mensagem("Valide se todos os campos estão preenchidos corretamente!")
  })
}

updateCancel(): void {
  this.router.navigate(['medicamento'])
}

}