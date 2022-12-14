import { CdkVirtualForOf } from '@angular/cdk/scrolling';
import { HttpBackend, HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MAT_NATIVE_DATE_FORMATS } from '@angular/material/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl:string = environment.baseUrl
// vamos a crear el servicio para consumirnos los heroes del back
// 1-centralizamos cualquier peticion hacia mi HttpBackend relacionada hacia mis HeroesService
//   y la manera ideal es usar Services este hara cualquier comunicacion con el back relacinada
//   con los heroes
// 2-Como necesito trabajar con las peticiones http entonces vamos a ocupar el HttpClientModule de MAT_NATIVE_DATE_FORMATS
//   global esto se hara el en app.module, por uqe los servivios estan de manera global.
// 3- como ya tememos el HttpClientModule de manera global ahora denro del constrctor vamos a hacer uso de esa peticion
// private apiUrl = 'http://localhost:3000/heroes'
  constructor( private http: HttpClient) {  }
  // nos crear una funcion para llamar los heroes debemos de hacer return

  // este metodo lo vamos a consumir en diferentes lados de  la aolicacion
  // // getheroeid(id:string):Observable<Heroe[]>{
  // //   const idUrl =`${this.apiUrl}/${id}`
  // //   return this.http.get<Heroe[]>(idUrl);
  // // }
  getheroes():Observable<Heroe[]>{

    // vamos a trabajar con varibles globales
   return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }
  
  buscaridheroe(id:string):Observable<Heroe>{
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`);
  }
  
  sugerenciasheroes(termino:string):Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${termino}&_limit=6`);
  }
  // hay que hacer una peticion post para hacer el la insersion a la base de datos
  // hay que hacerlo mediante el servicio por que angular no tiene una forma directamente para
  // conectarse a la base de datos no es que esto sea un inconveniente pero asi funciona la parte del front
  // nosotros tenemos que mandar ha hacer el llamado desde nuestro servicio a nuestro rest-api el res-api es 
  // quien literal va ha hacer la insersion de la base de datos

  // nos creamos el servicio para la insrsion
  agregarheroe( heroe:Heroe):Observable<Heroe>{
    return this.http.post<Heroe>(`${this.baseUrl}/heroes`,heroe)
      

  }

  actualizarheroe( heroe:Heroe):Observable<Heroe>{
    return this.http.put<Heroe>(`${this.baseUrl}/heroes/${heroe.id}`,heroe)
  }

  //vamos a crear el servicionpara elimiar un heroes en este caso usamos el metodo delete

  eliminarHeroe(id:string):Observable<any>{
    return this.http.delete(`${this.baseUrl}/heroes/${id}`)
    // despues hacemos el llamado de este servico donde lo vamos a usar
  }
}
