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

  constructor() { }

  ngOnInit() {
  }

  getValor(): Number {

    return 15 * 5;

  }

  getCurtirCurso(): Boolean {

    return true;

  }

}
