import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';
import { dniValido, telefonoValido } from 'src/app/validaciones/validaciones';
import swal from 'sweetalert';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister = this.fb.group({
    nombre: [''],
    apellidos: [''],
    password: ['', [Validators.required, Validators.minLength(4)]],
    password2: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    telefono: [undefined, [telefonoValido()]],
    dni: ['', [Validators.required, dniValido()]],
  })
  mensaje: string = ''
  mens: boolean = false
  password0: boolean = false
  password1: boolean = false

  constructor(private fb: FormBuilder, private servicioUsuario: UserService, private irHacia: Router) { }

  ngOnInit(): void {
    this.passw1()
    this.passw2()
  }

  submit(): void {
    if (this, this.formRegister.value.password == this.formRegister.value.password2) {
      this.servicioUsuario.registrar(this.formRegister.value).subscribe(
        respuesta => {
          console.log(respuesta)
          this.servicioUsuario.guardarToken(respuesta)
          swal("Registrado", "Ahora eres parte del lado oscuro my friend", "success", {
            buttons: {
              confirm: { text: 'Aceptar' },
            }
          });
          this.irHacia.navigate(['/perfil'])
        },
        error => {
          console.log(error);
          this.mens = true;
          this.mensaje = error.error.error;
          swal("Error", this.mensaje, "error", {
            buttons: {
              confirm: { text: 'Aceptar' },
            }
          })
          setTimeout(() => this.mens = false, 5000)
        });
    }
    else {
      swal("Error", "Las contraseñas no coinciden", "error", {
        buttons: {
          confirm: { text: 'Aceptar' },
        }
      })
    }

  }

  passw1() {
    if(this.password0 == false){
      this.password0 = true
    }else{
      this.password0 = false
    }
  }

  passw2() {
    if(this.password1 == false){
      this.password1 = true
    }else{
      this.password1 = false
    }
  }

}
