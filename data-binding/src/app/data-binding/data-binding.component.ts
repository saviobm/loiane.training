import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: String = 'http://loiane.training';

  cursoAngular: Boolean = true;

  urlImagem: String = 'http://lorempixel.com/400/200/nature/';

  valorAtual: String;

  valorSalvo: String;

  isMouseOver: Boolean;

  nomeCurso: String = 'Angular';

  constructor() { }

  ngOnInit() {
  }

  getValor(): Number {
    return 15 * 5;
  }

  getCurtirCurso(): Boolean {
    return true;
  }
  
  salvar(): void {
    alert("salvando...");
  }

  salvarValor(valorSalvo: String): void {
    this.valorSalvo = valorSalvo;
  }

  onMouseOverOut(): void {
    this.isMouseOver = !this.isMouseOver;
  }

  onKeyUp(evento: KeyboardEvent): void {
    console.log("Tecla clicada: " + evento.key + "\n");
    console.log("Código da tecla: " + evento.code);
    console.log("Id: " + (<HTMLInputElement>evento.target).id);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

}