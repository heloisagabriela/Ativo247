import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';

import { PacienteReadComponent } from './components/views/pacientes/paciente-read/paciente-read.component';
import { PacienteCreateComponent } from './components/views/pacientes/paciente-create/paciente-create.component';
import { PacienteDeleteComponent } from './components/views/pacientes/paciente-delete/paciente-delete.component';
import { PacienteUpdateComponent } from './components/views/pacientes/paciente-update/paciente-update.component';

import { EnderecoReadComponent } from './components/views/enderecos/endereco-read/endereco-read.component';
import { EnderecoCreateComponent } from './components/views/enderecos/endereco-create/endereco-create.component';
import { EnderecoDeleteComponent } from './components/views/enderecos/endereco-delete/endereco-delete.component';
import { EnderecoUpdateComponent } from './components/views/enderecos/endereco-update/endereco-update.component';
import { EnderecoReadAllComponent } from './components/views/enderecos/endereco-read-all/endereco-read-all.component';

import { MedicamentoReadComponent } from './components/views/medicamentos/medicamento-read/medicamento-read.component';
import { MedicamentoCreateComponent } from './components/views/medicamentos/medicamento-create/medicamento-create.component';
import { MedicamentoDeleteComponent } from './components/views/medicamentos/medicamento-delete/medicamento-delete.component';
import { MedicamentoUpdateComponent } from './components/views/medicamentos/medicamento-update/medicamento-update.component';

import { MedicoReadComponent } from './components/views/medicos/medico-read/medico-read.component';
import { MedicoCreateComponent } from './components/views/medicos/medico-create/medico-create.component';
import { MedicoDeleteComponent } from './components/views/medicos/medico-delete/medico-delete.component';
import { MedicoUpdateComponent } from './components/views/medicos/medico-update/medico-update.component';

import { PrescricaoReadComponent } from './components/views/prescricoes/prescricao-read/prescricao-read.component';
import { PrescricaoCreateComponent } from './components/views/prescricoes/prescricao-create/prescricao-create.component';
import { PrescricaoDeleteComponent } from './components/views/prescricoes/prescricao-delete/prescricao-delete.component';
import { PrescricaoUpdateComponent } from './components/views/prescricoes/prescricao-update/prescricao-update.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

  }, 
  {
    path: 'pacientes',
    component: PacienteReadComponent
  }, 
  {
    path: 'pacientes/create',
    component: PacienteCreateComponent
  }, 
  {
    path: 'pacientes/delete/:id',
    component: PacienteDeleteComponent
  }, 
  {
    path: 'pacientes/update/:id',
    component: PacienteUpdateComponent
  }, 

  {
    path: 'pacientes/:id_cat/enderecos',
    component: EnderecoReadAllComponent
  }, 
  {
    path: 'pacientes/:id_cat/enderecos/create',
    component: EnderecoCreateComponent
  }, 
  {
    path: 'pacientes/:id_cat/enderecos/:id/update',
    component: EnderecoUpdateComponent
  }, 
  {
    path: 'pacientes/:id_cat/enderecos/:id/delete',
    component: EnderecoDeleteComponent
  }, 
  {
    path: 'pacientes/:id_cat/enderecos/:id/read',
    component: EnderecoReadComponent
  },

  {
    path: 'medicamentos',
    component: MedicamentoReadComponent
  }, 
  {
    path: 'medicamentos/create',
    component: MedicamentoCreateComponent
  }, 
  {
    path: 'medicamentos/delete/:id',
    component: MedicamentoDeleteComponent
  }, 
  {
    path: 'medicamentos/update/:id',
    component: MedicamentoUpdateComponent
  }, 

  {
    path: 'medicos',
    component: MedicoReadComponent
  }, 
  {
    path: 'medicos/create',
    component: MedicoCreateComponent
  }, 
  {
    path: 'medicos/delete/:id',
    component: MedicoDeleteComponent
  }, 
  {
    path: 'medicos/update/:id',
    component: MedicoUpdateComponent
  }, 

  {
    path: 'prescricoes',
    component: PrescricaoReadComponent
  }, 
  {
    path: 'prescricoes/create',
    component: PrescricaoCreateComponent
  }, 
  {
    path: 'prescricoes/delete/:id',
    component: PrescricaoDeleteComponent
  }, 
  {
    path: 'prescricoes/update/:id',
    component: PrescricaoUpdateComponent
  }, 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
