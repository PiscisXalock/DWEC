import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuberias',
  templateUrl: './tuberias.component.html',
  styleUrls: ['./tuberias.component.css']
})
export class TuberiasComponent implements OnInit {

  usuario: string = "Jaime Abad García"
  mes: string = "ENERO"
  texto: string = "Lorem  ipsum"
  fecha: Date = new Date()
  dinero: number = 12.40
  numero_pi: number = Math.PI
  preposiciones: string[] = ['a','ante','bajo','cabe','con','contra','de','desde','en','entre']
  usuarios = [
    {nombre: "Jaime", apellido: "Abad", edad: "21"},
    {nombre: "Laura", apellido: "Sanchez", edad: "24"},
    {nombre: "Victor", apellido: "Escribano", edad: "24"}
  ]
  dni: number


  constructor() { }

  ngOnInit(): void {
  }

}
