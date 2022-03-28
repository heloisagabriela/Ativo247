import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Endereco } from '../endereco-read-all/endereco.model';
import { EnderecoService } from '../endereco';

@Component({
  selector: 'app-endereco-update',
  templateUrl: './endereco-update.component.html',
  styleUrls: ['./endereco-update.component.css']
}) export class EnderecoUpdateComponent implements OnInit {

  cep = new FormControl('',[Validators.minLength(3)])
  rua = new FormControl('',[Validators.minLength(3)])
  numero = new FormControl('',[Validators.minLength(30)])
  bairro = new FormControl('',[Validators.minLength(30)])
  complemento = new FormControl('',[Validators.minLength(30)])
  cidade = new FormControl('',[Validators.minLength(30)])
  estado = new FormControl('',[Validators.minLength(30)])

  id_cat: String = ''

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

  // getMessage() {
  //   if(this.cep.invalid){
  //     return "O campo deve conter entre 3 e 100 caracteres";
  //   }

  //   if(this.rua.invalid){
  //     return "O campo deve conter entre 3 e 100 caracteres";
  //   }

  //   if(this.numero.invalid){
  //     return "O campo deve conter entre 30 e 2000000 caracteres";
  //   }

  //   if(this.bairro.invalid){
  //     return "O campo deve conter entre 30 e 2000000 caracteres";
  //   }

  //   if(this.complemento.invalid){
  //     return "O campo deve conter entre 30 e 2000000 caracteres";
  //   }

  //   if(this.cidade.invalid){
  //     return "O campo deve conter entre 30 e 2000000 caracteres";
  //   }

  //   if(this.estado.invalid){
  //     return "O campo deve conter entre 30 e 2000000 caracteres";
  //   }
  //   return false;

  // }

  CancelParaEnderecos() :void {
    this.router.navigate([`paciente/${this.id_cat}/enderecos`])
  }

  findById() : void {
    this.service.findById(this.endereco.id!).subscribe((resposta) => {
      this.endereco = resposta
    })
  }

  update() : void {
    this.service.update(this.endereco).subscribe((resposta)=> {
      this.router.navigate([`categorias/${this.id_cat}/enderecos`])
      this.service.mensagem("Livro atualizado com sucesso !")
    }, err => {
      this.router.navigate([`categorias/${this.id_cat}/enderecos`])
      this.service.mensagem("Falha ao atualizar endereco, valide os campos novamente !")
    })
  }
}
