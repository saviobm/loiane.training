import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'selenium-webdriver';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  nome: String = "abc";

  mensagemIdade: String = "Tô fora. Não quero ser preso.";

  pessoa: any = {
    nome: "Sávio Bispo Maciel",
    idade: 20,
    endereco: {
      municipio: "Formosa",
      uf: "GO"
    }
  }

  constructor() { }

  ngOnInit() {            
  }

  verificaIdade($event): void {
    if (Number($event.target.value) > 16) {
      this.mensagemIdade = "Savera tá dentro";
    } else {
      this.mensagemIdade = "Tô fora. Não quero ser preso."
    }
  }

}
