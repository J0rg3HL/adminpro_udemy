import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

@Input() progreso: number = 50;
@Input()  leyenda: string = 'Leyenda X';

@Output()  valorActual: EventEmitter<number> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }




  valorActualizado( valorcin: number) {

    console.log(valorcin);

    this.progreso += valorcin;

    console.log( this.progreso);
    this.valorActual.emit(this.progreso);
  }

}
