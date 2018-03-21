import {
  Component, OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input
} from '@angular/core';


@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial: number = 10;

  constructor() {
    this.log('construtor');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngDoCkeck() {
    this.log('ngDoCkeck');
  }

  ngAfterContentCkecked() {
    this.log('ngAfterContentCkecked');
  }

  ngAfterViewCkecked() {
    this.log('ngAfterViewCkecked');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  private log(value: string): void {

    console.log(value);

  }

}