import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { LoteriaComponent } from './componentes/loteria/loteria.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { MultiplicarComponent } from './componentes/multiplicar/multiplicar.component';
import { GenerarNombreYApellidoComponent } from './componentes/generar-nombre-y-apellido/generar-nombre-y-apellido.component';
import { TuberiasComponent } from './componentes/tuberias/tuberias.component';
import { EstructurasComponent } from './componentes/estructuras/estructuras.component';
import { FormularioClaseComponent } from './componentes/formulario-clase/formulario-clase.component';
import { CrudLocalComponent } from './componentes/crud-local/crud-local.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CrudComponent } from './componentes/crud/crud.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { PerfilComponent } from './componentes/auth/perfil/perfil.component';
import { UserRouterGuard } from './auth/user-router.guard';
import { ListarPerfilesComponent } from './componentes/listar-perfiles/listar-perfiles.component';
import { EditarRolesComponent } from './componentes/editar-roles/editar-roles.component';
import { AdminGuard } from './auth/admin.guard';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "about", component:AboutComponent},
  {path: "loteria", component:LoteriaComponent},
  {path: "calculadora", component:CalculadoraComponent},
  {path: "multiplicar/:factor", component:MultiplicarComponent},
  {path: "tuberias", component:TuberiasComponent},
  {path: "estructuras", component:EstructurasComponent},
  {path: "generar-nombre-y-apellido/:nombre/:apellido", component:GenerarNombreYApellidoComponent},
  {path: "formulario", component:FormularioClaseComponent},
  {path: "crudLocal", component:CrudLocalComponent},
  {path: "register", component:RegistroComponent},
  {path: "registro", component:RegisterComponent},
  {path: "crud", component:CrudComponent},
  {path: "login", component:LoginComponent},
  {path: "perfil", component:PerfilComponent, canActivate:[UserRouterGuard]},
  {path: "listarPerfiles", component:ListarPerfilesComponent},
  {path: "admin", component:EditarRolesComponent, canActivate:[AdminGuard]},
  {path: "**", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
