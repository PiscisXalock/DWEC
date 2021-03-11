import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user.service';
import { User } from 'src/app/clases/user';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { Mensaje } from 'src/app/clases/mensaje';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { dniValido } from 'src/app/validaciones/validaciones';
import swal from 'sweetalert';

@Component({
  selector: 'app-listar-perfiles',
  templateUrl: './listar-perfiles.component.html',
  styleUrls: ['./listar-perfiles.component.css']
})
export class ListarPerfilesComponent implements OnInit {

  usuarios: any
  usuarioSel: User
  mensaje: Mensaje = new Mensaje()
  mensajes: Mensaje[] = []
  formMensaje = this.fb.group({
    idDestinatario: [''],
    mensaje: ['', Validators.required]
  });



  constructor(private servicioUsuario:UserService, private servicioMensajes:MensajesService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.obtenerUsuarios()
  }

  obtenerUsuarios(): void{
    this.servicioUsuario.listarUsuarios().subscribe(
      respuesta =>{
        console.log(respuesta)
        this.usuarios = respuesta
      },
      error => {
        console.log(error)
      }
    )
  }

  escribirMensaje(): void{
    console.log(this.formMensaje.value)
    this.servicioMensajes.enviarMensaje(this.formMensaje.value).subscribe(
      respuesta => {
        console.log(respuesta)
        swal("Completado", respuesta, "success", {
          buttons: {
            confirm: { text: 'Aceptar' },
          }
        })
      },
      error => {
        console.log(error)
        swal("Error", error, "error", {
          buttons: {
            confirm: { text: 'Aceptar' },
          }
        })
      }
    )
  }

}
