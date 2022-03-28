import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Endereco } from '../endereco-read-all/endereco.model';
import { EnderecoService } from '../endereco';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-endereco-read',
  templateUrl: './endereco-read.component.html',
  styleUrls: ['./endereco-read.component.css']
})
export class EnderecoReadComponent implements OnInit {
  id_cat: String = ''

  cep = new FormControl('',[Validators.minLength(3)])
  rua = new FormControl('',[Validators.minLength(3)])
  numero = new FormControl('',[Validators.minLength(3)])
  bairro = new FormControl('',[Validators.minLength(3)])
  complemento = new FormControl('',[Validators.minLength(3)])
  cidade = new FormControl('',[Validators.minLength(3)])
  estado = new FormControl('',[Validators.minLength(3)])

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
}
