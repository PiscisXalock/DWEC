import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  nombre: string
  apellido: string

  constructor(private irHacia:Router) { }

  ngOnInit(): void {
  }

  llevame(): void{
    this.irHacia.navigate(['/generar-nombre-y-apellido/' + this.nombre + '/' + this.apellido])
  }

}
