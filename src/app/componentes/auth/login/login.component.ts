import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  })
  mensaje: string = ''
  mens: boolean = false

  constructor(private fb: FormBuilder, private servicioUsuario: UserService, private irHacia: Router) { }

  ngOnInit(): void {
    if (this, this.servicioUsuario.isLogged()) {
      this.irHacia.navigate(['/perfil'])
    }
  }

  submit(): void {
    this.servicioUsuario.acceso(this.formLogin.value).subscribe(
      respuesta => {
        console.log(respuesta)
        this.servicioUsuario.guardarToken(respuesta)
        swal("Completado", "Logueado con exito", "success", {
          buttons: {
            confirm: { text: 'Aceptar' },
          }
        })
        this.irHacia.navigate(['/perfil'])
      },
      error => {
        console.log(error)
        this.mens = true;
        this.mensaje = error.error.error;
        swal("Error", this.mensaje, "error", {
          buttons: {
            confirm: { text: 'Aceptar' },
          }
        })
    setTimeout(() => this.mens = false, 5000)
  }
    )
}

}
