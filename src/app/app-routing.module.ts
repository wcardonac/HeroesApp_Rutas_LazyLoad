import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
// import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
//aqui hay varias cosas que no voy a usar por que este es un archivo que solo 
// a configurar las rutas

//voy a definir las rutas,
// con esto estamos definiento las rutas principales que tendra mi aplicacion
const routes : Routes = [
  {
    path:'auth',
    // esta sintaxis se ve rara pero es la clave del lazyload
    loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'heroes',
    loadChildren: ()=>import('./heroes/heroes.module').then(m => m.HeroesModule)
  },
  {
    path: '404',
    component: ErrorPageComponent // mostranos este compomete por que lo tenemos de manera global
  },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: '404'
  }
  // de esta manera creamos nuestras rutas principales que vamos a tener en esta app
]

// nota:
// no vamos a importar otras rutas aqui, por que tendria que definirlas de laguna
// manera en el appmodule, y no se quiere hacer esto para poder trabajar con el lazyload
// por que si se definen ahi eso quiere decir que las rutas se cargarian.


@NgModule({
 
  imports: [
//  importamos el forroot por que solo tengo estas rutas como principales
    RouterModule.forRoot(routes)
    

  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
