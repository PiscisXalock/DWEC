import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-multiplicar',
  templateUrl: './multiplicar.component.html',
  styleUrls: ['./multiplicar.component.css']
})
export class MultiplicarComponent implements OnInit {

  factor: number;
  tabla: number[] = [0];

  constructor(private rutaActiva: ActivatedRoute, private irHacia:Router) { }

  ngOnInit(): void {
    this.factor = parseInt(this.rutaActiva.snapshot.paramMap.get("factor"))
    if (!isNaN(this.factor)){
      for (let index = 0; index < 10; index++){
        this.tabla.push(this.factor * index)
      }
    }
  }

  volverACalculadora(): void{
    this.irHacia.navigate(['/calculadora'])
  }

}
