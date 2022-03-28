import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Endereco } from '../endereco-read-all/endereco.model';
import { EnderecoService } from '../endereco';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-endereco-delete',
  templateUrl: './endereco-delete.component.html',
  styleUrls: ['./endereco-delete.component.css']
})
export class EnderecoDeleteComponent implements OnInit {
  id_cat: String = ''

  cep = new FormControl('',[Validators.minLength(3)])
  rua = new FormControl('',[Validators.minLength(3)])
  numero = new FormControl('',[Validators.minLength(30)])
  bairro = new FormControl('',[Validators.minLength(30)])
  complemento = new FormControl('',[Validators.minLength(30)])
  cidade = new FormControl('',[Validators.minLength(30)])
  estado = new FormControl('',[Validators.minLength(30)])

  endereco: Endereco = {
    id: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    complemento: '',
    cidade: '',
    estado: ''

  }
  
  constructor(private router: Router, private route: ActivatedRoute, private service: EnderecoService) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get("id_cat")!;
    this.endereco.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }


  CancelParaEnderecos() :void {
    this.router.navigate([`paciente/${this.id_cat}/enderecos`])
  }

  findById() : void {
    this.service.findById(this.endereco.id!).subscribe((resposta) => {
      this.endereco = resposta
    })
  }

  delete () : void {
    this.service.delete(this.endereco.id!).subscribe((resposta) => {
      this.router.navigate([`paciente/${this.id_cat}/enderecos`])
      this.service.mensagem("Endereco deletado com sucesso !")
    },err => {
      this.service.mensagem("Houve falha ao deletar o endereco ! Tente mais tarde")
    })
  }
}
