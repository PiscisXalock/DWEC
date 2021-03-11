import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-generar-loteria',
  templateUrl: './generar-loteria.component.html',
  styleUrls: ['./generar-loteria.component.css']
})
export class GenerarLoteriaComponent implements OnInit {

  digito: number;
  @Input() entrada: number;
  @Input() objetoEntrada = {nombre:"",apellido:""};

  constructor() { }

  ngOnInit(): void {
    //this.obtenAleatorio();
  }

  obtenAleatorio(): void{
    this.digito = Math.floor(Math.random() * (10));
  }

}
