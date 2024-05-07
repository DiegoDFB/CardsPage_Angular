import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-tcc',
  templateUrl: './formulario-tcc.component.html',
  styleUrls: ['./formulario-tcc.component.css']
})
export class FormularioTCCComponent {
  ocultarSenha = true;

  constructor(private formBuilder: FormBuilder) {}

  cadastroForm = this.formBuilder.group({
    nome: this.formBuilder.control('', [Validators.required]),
    email: this.formBuilder.control('', [Validators.required]),
    usuario: this.formBuilder.control('', [Validators.required]),
    senha: this.formBuilder.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]),
    confirmarSenha: this.formBuilder.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]),
  });

  onEnviar(){
    console.table(this.cadastroForm.value);
  }
}
