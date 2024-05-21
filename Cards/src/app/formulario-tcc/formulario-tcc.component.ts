import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-formulario-tcc',
  templateUrl: './formulario-tcc.component.html',
  styleUrls: ['./formulario-tcc.component.css']
})
export class FormularioTCCComponent {
  ocultarSenha = true;

  constructor(private formBuilder: FormBuilder) {}

  cadastroForm = this.formBuilder.group({
    nome: this.formBuilder.control('', [Validators.required] ),
    sobrenome: this.formBuilder.control('', [Validators.required]),
    idade: this.formBuilder.control('', [Validators.required]),
    peso: this.formBuilder.control('', [Validators.required]),
    doenca: this.formBuilder.control('', [Validators.required]),
    doencaSeleciona: this.formBuilder.control(''),
    contato1: this.formBuilder.control('', [Validators.required, Validators.min(10000000000), Validators.max(999999999999)]),
    contato2: this.formBuilder.control('', [Validators.required, Validators.min(10000000000), Validators.max(999999999999)]),
    contato3: this.formBuilder.control('', [Validators.required, Validators.min(10000000000), Validators.max(999999999999)]),
  });

  onEnviar(){
    console.table(this.cadastroForm.value);
    this.cadastroForm.reset();
  }

  optionselected : string = "";
  possuiDoenca = [
  {value: '', viewValue: 'Selecionar'},
  {value: 'nao', viewValue: 'Não Possuo'},
  {value: 'sim', viewValue: 'Possuo'}
  ]

  doencaSelecionada : string = "";
  doencas = [
  {value: '', viewValue: 'Selecionar'},
  {value: 'hipertensao', viewValue: 'Hipertensão'},
  {value: 'hipotensao', viewValue: 'Hipotensão'}
  ]

  ChangeOption(event: MatSelectChange)
  {
    this.optionselected = event.value;  
  }

}
