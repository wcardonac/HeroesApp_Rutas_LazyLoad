import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate  {

  // vamos a hacer la inyeccion de nuestro servicio, con esto ya puedo usar cuanquile metodo que este el servicio
  constructor(private authService:AuthService,
              private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean > | boolean  {

      return this.authService.verificaAutenticacion()
          .pipe(
            tap(estaautenticado=>{
              if (!estaautenticado) {
                this.router.navigate(['./auth/login'])
              }
            })
          )
      // para implementar eso es literalmente igual que el canload
      // if (this.authService.auth.id) {
      //   return true;
      // }

      // console.log('bloquedo por el authgaurds canActive');
     
      // return false;
   
  }

  canLoad(
    route: Route,
    segments:UrlSegment[]):Observable<boolean> | boolean{

      return this.authService.verificaAutenticacion()
         .pipe(
          tap(estaautenticado=>{
            if (!estaautenticado) {
              this.router.navigate(['./auth/login'])
            }
        })
      )

      // if (this.authService.auth.id) {
      //   return true;
      // }

      // console.log('bloquedo por el authgaurds.canload');
     
      // return false;

  }

  // nota: el canload solo sirve para prevenir carfar el modulo, pero si este modulo 
  // ya estaba previamente cargado lo dejara pasar
  
}
