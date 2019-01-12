import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {


  progreso1: number = 10;
  progreso2: number = 60;

  leyenda1: string = 'Barra da  analisis';
  leyenda2: string = 'Barra de utilidad';

  salida1: number = 0;

  constructor() { }

  ngOnInit() {
  }


}
