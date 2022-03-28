import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Medicamento } from '../medicamento-read/medicamento.model';
import { MedicamentoService } from '../medicamento.service';

@Component({
  selector: 'app-medicamento-delete',
  templateUrl: './medicamento-delete.component.html',
  styleUrls: ['./medicamento-delete.component.css']
})
export class MedicamentoDeleteComponent implements OnInit {
  
  medicamento: Medicamento ={
    id:'',
    nome: '',
    descricao: ''
  }

  constructor(private service: MedicamentoService, private router: Router,private route: ActivatedRoute) { }

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

  delete(): void{
    this.service.delete(this.medicamento.id!).subscribe((resposta)=> {
      this.router.navigate(['medicamentos'])  
      this.service.mensagem("Medicamento deletada com sucesso!")
    }, err =>{
      this.service.mensagem(err.error.error)
    })
  }

  deleteCancel(): void {
    this.router.navigate(['medicamentos'])
  }


}
