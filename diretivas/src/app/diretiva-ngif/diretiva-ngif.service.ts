import { Injectable } from '@angular/core';
import { Http } from '@angular/http/src/http';

@Injectable()
export class DiretivaNgifService {

  mensagens: object[];

  constructor(private http: Http) {
    
    http.get('/assets/i18n/pt-BR.json').subscribe(res => {
      this.mensagens = res.json();
    });

    console.log(this.mensagens);

   }

}
