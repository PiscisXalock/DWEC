import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { dniValido, telefonoValido } from 'src/app/validaciones/validaciones';
import swal from 'sweetalert';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formRegister: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required,Validators.minLength(3)]),
    apellidos: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email]),
    dni: new FormControl('', [Validators.required, dniValido]),
    telefono: new FormControl(undefined, [Validators.required, telefonoValido])
  });

  formRegister2 = this.fb.group({
    nombre: ['', [Validators.required,Validators.minLength(3)]],
    apellidos: ['', [Validators.required]],
    password: ['', [Validators.required]],
    email: ['', [Validators.required,Validators.email]],
    dni: ['', [Validators.required]],
    telefono: [undefined, [Validators.required]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  evaluaForm():void {
    console.log("Evaluando formulario");
    console.log(this.formRegister.getRawValue());
    if(this.formRegister.valid){
      console.log("El formulario es correcto");
      swal("Registrado", "El formulario es correcto", "success", {
        buttons: {
          confirm: { text: 'Aceptar' },
        }
      })
    } else{
      console.log("El formulario introducido no es correcto");
      swal("Registrado", "El formulario introducido no es correcto", "warning", {
        buttons: {
          confirm: { text: 'Aceptar' },
        }
      })
    }
  }
  
  get dni1(){
    return this.formRegister.get("dni");
  }

  get nombre1(){
    return this.formRegister.get("nombre");
  }

  get apellidos1(){
    return this.formRegister.get("apellidos");
  }

  get email1(){
    return this.formRegister.get("email");
  }

  get password1(){
    return this.formRegister.get("password");
  }

  get telefono1(){
    return this.formRegister.get("telefono");
  }

}
