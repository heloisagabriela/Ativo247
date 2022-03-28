import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Endereco } from '../endereco-read-all/endereco.model';
import { EnderecoService } from '../endereco';

@Component({
  selector: 'app-endereco-create',
  templateUrl: './endereco-create.component.html',
  styleUrls: ['./endereco-create.component.css']
})
export class EnderecoCreateComponent implements OnInit {

  cep = new FormControl('',[Validators.minLength(3)])
  rua = new FormControl('',[Validators.minLength(3)])
  numero = new FormControl('',[Validators.minLength(3)])
  bairro = new FormControl('',[Validators.minLength(3)])
  complemento = new FormControl('',[Validators.minLength(3)])
  cidade = new FormControl('',[Validators.minLength(3)])
  estado = new FormControl('',[Validators.minLength(3)])

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
    this.id_cat = this.route.snapshot.paramMap.get("id_cat")!
  }

  create () : void {
    this.service.create(this.endereco, this.id_cat).subscribe((resposta) => {
      this.router.navigate([`paciente/${this.id_cat}/enderecos`])
      this.service.mensagem("Endereco criado com sucesso !")
    },err => {
      this.router.navigate([`peciente/${this.id_cat}/enderecos`])
      this.service.mensagem(err.error.error)
      console.log(err.error.error)
      //this.service.mensagem("Erro ao cadastrar medico! Valide os campos novamente")
    })
  }

  
  // getMessage() {
  //   if(this.cep.invalid){
  //     return "O campo deve conter entre 3 e 100 caracteres";
  //   }

  //   if(this.rua.invalid){
  //     return "O campo deve conter entre 3 e 100 caracteres";
  //   }

  //   if(this.numero.invalid){
  //     return "O campo deve conter entre 3 e 100 caracteres";
  //   }

  //   if(this.bairro.invalid){
  //     return "O campo deve conter entre 3 e 100 caracteres";
  //   }

  //   if(this.complemento.invalid){
  //     return "O campo deve conter entre 3 e 100 caracteres";
  //   }

  //   if(this.cidade.invalid){
  //     return "O campo deve conter entre 3 e 100 caracteres";
  //   }

  //   if(this.estado.invalid){
  //     return "O campo deve conter entre 3 e 100 caracteres";
  //   }

  //   return false;

  // }

  CancelParaEnderecos() :void {
    this.router.navigate([`enderecos/${this.id_cat}/enderecos`])
  }

}
