import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/app/clases/nota';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-crud-local',
  templateUrl: './crud-local.component.html',
  styleUrls: ['./crud-local.component.css']
})
export class CrudLocalComponent implements OnInit {

  notaNueva: Nota = new Nota()
  notas: Nota[] = []
  indice: number
  indiceUser: number
  notaSeleccionada: Nota = new Nota()
  usuarioNuevo: Usuario = new Usuario()
  usuarios: Usuario[] = []
  usuarioSeleccionado: Usuario = new Usuario()

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('crudLocal') != null){
      this.notas = JSON.parse(localStorage.getItem('crudLocal'));
      this.indice = this.notas[this.notas.length - 1].id + 1;
    }else {
      this.indice = 0;
    }
    if(localStorage.getItem('crudLocalUser') != null){
      this.usuarios = JSON.parse(localStorage.getItem('crudLocalUser'));
      this.indiceUser = this.usuarios[this.usuarios.length - 1].id + 1;
    }else {
      this.indiceUser = 0;
    }
  }

  insertarNota(): void{
    this.notaNueva.id = this.indice;
    this.indice++;
    this.notas.push(this.notaNueva);
    this.notaNueva = new Nota();
    localStorage.setItem('crudLocal', JSON.stringify(this.notas));
  }

  editarNota(notaEntrada: Nota): void{
    for(let i in this.notas){
      if(this.notas[i].id == notaEntrada.id){
        this.notas[i] = notaEntrada;
        this.notaSeleccionada = new Nota();
        localStorage.setItem('crudLocal', JSON.stringify(this.notas));
      }
    }
  }

  borrarNota(notaEntrada: Nota): void{
    if(confirm("¿seguro que quiere eliminar la nota " + notaEntrada.titulo + "?")){
      for(let i in this.notas){
        if(this.notas[i].id == notaEntrada.id){
          this.notas.splice(parseInt(i), 1);
          this.notaSeleccionada = new Nota();
          localStorage.setItem('crudLocal', JSON.stringify(this.notas));
        }
      }
    }
  }

  insertarUsuario(): void{
    this.usuarioNuevo.id = this.indice;
    this.indiceUser++;
    this.usuarios.push(this.usuarioNuevo);
    this.usuarioNuevo = new Usuario();
    localStorage.setItem('crudLocalUser', JSON.stringify(this.usuarios));
  }

  editarUsuario(usuarioEntrada: Usuario): void{
    for(let i in this.usuarios){
      if(this.usuarios[i].id == usuarioEntrada.id){
        this.usuarios[i] = usuarioEntrada;
        this.usuarioSeleccionado = new Usuario();
        localStorage.setItem('crudLocalUser', JSON.stringify(this.usuarios));
      }
    }
  }

  borrarUsuario(usuarioEntrada: Nota): void{
    if(confirm("¿seguro que quiere eliminar el usuario " + usuarioEntrada.titulo + "?")){
      for(let i in this.usuarios){
        if(this.usuarios[i].id == usuarioEntrada.id){
          this.usuarios.splice(parseInt(i), 1);
          this.usuarioSeleccionado = new Usuario();
          localStorage.setItem('crudLocalUser', JSON.stringify(this.usuarios));
        }
      }
    }
  }

}
