import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

// vamos a crear las rutas hijas y lazyload
// estas rutas no tineen nada diferente  en la forma 
// como se ha hecho las rutas principas a excepcion de unos peqieños
// cambios

const routes: Routes = [
  {
    path: '',
    children:[
      // el children son las rutas hijas que esta ruta va a tener
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'registro',
        component: RegistroComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  }
]

@NgModule({

  imports: [
  //  aqui vamos a importa nuetro RouterModule.forChild esta es la unica difeencia
  //  por que anterior mente usabamos el forroot y el forrot se usa una unica vez par 
  //  las rutas principales

  // nota : solo vamos a tener un unico forRoot en nuestra app
  RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }
