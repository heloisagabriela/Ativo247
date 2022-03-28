import { MedicamentoService } from '../medicamento.service';
import { Component, OnInit } from '@angular/core';
import { Medicamento } from '../medicamento-read/medicamento.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-medicamento-create',
  templateUrl: './medicamento-create.component.html',
  styleUrls: ['./medicamento-create.component.css']
})
export class MedicamentoCreateComponent implements OnInit {

  medicamento: Medicamento ={
    nome: '',
    descricao: ''
  }

  constructor(private service: MedicamentoService, private router: Router) { }

  ngOnInit(): void {
  }

    create() :void {
      this.service.create(this.medicamento).subscribe((resposta)=>{
        this.router.navigate(['medicamentos'])
        this.service.mensagem('Medicamento criada com Sucesso !');
      },err =>{
        for(let i = 0; i < err.error.errors.length;i++){
          this.service.mensagem(err.error.errors[i].message)
        }
        
      });
    }

    CancelParaMedicamento() :void {
      this.router.navigate(["medicamentos"])
    }
}
