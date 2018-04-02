import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.scss']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string[] = [];

  mostrarCursos: boolean = false;

  constructor(private http: Http) {   

  }

  ngOnInit() {

  }

  onMostrarCursos(): void {
    this.mostrarCursos = !this.mostrarCursos;
  }

}
