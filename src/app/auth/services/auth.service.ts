import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { tap,map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // este seevicio sera para el manejo de todas las peticiones hacia ese enpoint

  private baseUrl:string = environment.baseUrl

  // video 223 mostrar informacion del usuario activo

  // actuamente tenemos nuestra "autenticacion " en la consola pero todavi no la esramos 
  // haciendo persintente, imaginemos que 
  // queremos mostrar el asuario que hizo login en la app

private _auth: Auth | undefined

get auth():Auth{

  return {...this._auth!}
}

  constructor(private http: HttpClient) { }

  // vamos a hacer una funcion o metodo para verificar el estdo de la auntenticacion

  verificaAutenticacion():Observable<boolean>{
    if (!localStorage.getItem('token')) {
      return of(false)
    }
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
        .pipe(
          map(auth=>{
              this._auth = auth
              return true
              
          })
        )
  }

  login(){
    // para hacer esto lo primero es almacenar el resultador de este return en 
    // alguna variable
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
        .pipe(
          tap(auth => this._auth = auth),
          tap(auth => localStorage.setItem('token',auth.id))
          // vamos a mantener la session del usrioa
        )
    
  }

 

}
