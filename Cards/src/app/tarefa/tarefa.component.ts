import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent {

  constructor(private formBuilder: FormBuilder) {}

  cadastroForm = this.formBuilder.group({
    resumo: this.formBuilder.control('', [Validators.required]),
    tipo: this.formBuilder.control('', [Validators.required]),
    prioridade: this.formBuilder.control('', [Validators.required]),
    prazo: this.formBuilder.control('', [Validators.required]),
    descricao: this.formBuilder.control('', [Validators.maxLength(10)])
  });

  onEnviar(){
    console.table(this.cadastroForm.value);
  }
}
