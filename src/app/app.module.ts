import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
// import { AuthenticationComponent } from './components/views/authentication/authentication.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './components/views/home/home.component';
import { MatCardModule } from '@angular/material/card';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { PacienteReadComponent } from './components/views/pacientes/paciente-read/paciente-read.component';
import { PacienteCreateComponent } from './components/views/pacientes/paciente-create/paciente-create.component';
import { PacienteDeleteComponent } from './components/views/pacientes/paciente-delete/paciente-delete.component';
import { PacienteUpdateComponent } from './components/views/pacientes/paciente-update/paciente-update.component';
import { EnderecoReadAllComponent } from './components/views/enderecos/endereco-read-all/endereco-read-all.component';
import { EnderecoCreateComponent } from './components/views/enderecos/endereco-create/endereco-create.component';
import { EnderecoUpdateComponent } from './components/views/enderecos/endereco-update/endereco-update.component';
import { EnderecoDeleteComponent } from './components/views/enderecos/endereco-delete/endereco-delete.component';
import { EnderecoReadComponent } from './components/views/enderecos/endereco-read/endereco-read.component';

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



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    // AuthenticationComponent,
    PacienteReadComponent,
    PacienteCreateComponent,
    PacienteDeleteComponent,
    PacienteUpdateComponent,
    EnderecoReadAllComponent,
    EnderecoCreateComponent,
    EnderecoUpdateComponent,
    EnderecoDeleteComponent,
    EnderecoReadComponent,
    MedicamentoReadComponent,
    MedicamentoCreateComponent,
    MedicamentoDeleteComponent,
    MedicamentoUpdateComponent,
    MedicoReadComponent,
    MedicoCreateComponent,
    MedicoDeleteComponent,
    MedicoUpdateComponent,
    PrescricaoReadComponent,
    PrescricaoCreateComponent,
    PrescricaoDeleteComponent,
    PrescricaoUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
