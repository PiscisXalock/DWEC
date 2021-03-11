import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import swal from 'sweetalert';

@Component({
  selector: 'app-formulario-clase',
  templateUrl: './formulario-clase.component.html',
  styleUrls: ['./formulario-clase.component.css']
})
export class FormularioClaseComponent implements OnInit {

  user: Usuario = new Usuario();
  users: Usuario[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  insertar():void {
    if(this.user.nombre == null || this.user.apellido == null || this.user.edad == null || this.users == null){
      swal("Información", "Debe rellenar todos los campos", "info", {
        buttons: {
          confirm: { text: 'Aceptar' },
        }
      })
    }else{
    this.users.push(this.user);
    this.user = new Usuario;
    localStorage.setItem('backup', JSON.stringify(this.users));
    }
  }

  alertame(entrada:string){
    console.log(entrada);
    swal("Información", entrada, "info", {
      buttons: {
        confirm: { text: 'Aceptar' },
      }
    })
  }

}
