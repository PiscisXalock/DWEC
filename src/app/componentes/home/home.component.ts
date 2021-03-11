import { Component, OnDestroy, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import swal from 'sweetalert';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  variable: String = "texto de prueba"
  numero1: number = 0
  numero2: number = 0
  letras = ["a","b","c"]
  usuarios = [
    {nombre:"Jaime",apellido:"Abad"},
    {nombre:"Javier",apellido:"Bueno"},
    {nombre:"Manuel",apellido:"Palomino"}
  ]

  usuarios2: Usuario[] = [
    {id: 1, nombre:"Piscis",apellido:"Xalock"},
    {id: 2, nombre: "Jaime", apellido: "Abad"}
  ]

  usuario3: Usuario = new Usuario("Regina", "Marin");

  usuarioSel
  selUser(usuario){
    this.usuarioSel = usuario;
  }

  constructor() { }

  ngOnInit(): void {
  }

  /*ngOnDesroy(): void{
    swal("Adiós", "Hasta luego.", "info", {
      buttons: {
        confirm: { text: 'Aceptar' },
      }
    })
  }*/

}
