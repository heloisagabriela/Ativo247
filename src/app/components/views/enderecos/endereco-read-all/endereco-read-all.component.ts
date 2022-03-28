import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnderecoService } from '../endereco';
import { Endereco } from './endereco.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-endereco-read-all',
  templateUrl: './endereco-read-all.component.html',
  styleUrls: ['./endereco-read-all.component.css']
})
export class EnderecoReadAllComponent implements OnInit {

  
  displayedColumns: string[] = ['id', 'cep', 'rua', 'numero', 'bairro', 'complemento', 'cidade', 'estado','acoes'];
  enderecos: Endereco[]=[]
  id_cat : String = ''

  constructor(private service: EnderecoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
      this.id_cat = this.route.snapshot.paramMap.get('id_cat')!
      this.findAll();
  }

  findAll() :void {
      this.service.findAllByEndereco(this.id_cat).subscribe((resposta)=> {
          this.enderecos = resposta;
          
      })
  }

  navegarParaCriarEndereco() : void {
    this.router.navigate([`categorias/${this.id_cat}/enderecos/create`])
  }

}
