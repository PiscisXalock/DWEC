import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generar-nombre-y-apellido',
  templateUrl: './generar-nombre-y-apellido.component.html',
  styleUrls: ['./generar-nombre-y-apellido.component.css']
})
export class GenerarNombreYApellidoComponent implements OnInit {

  nombre: string
  apellido: string

  constructor(private miRuta: ActivatedRoute) { }

  ngOnInit(): void {
    this.nombre = this.miRuta.snapshot.paramMap.get("nombre")
    this.apellido = this.miRuta.snapshot.paramMap.get("apellido")
  }

}
