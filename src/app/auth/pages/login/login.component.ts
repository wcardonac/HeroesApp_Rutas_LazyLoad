import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent  {

  constructor(private router: Router,
              private authService: AuthService) { }


// cuanod le demos la boton de login
// este hara dos cosas ir al backend
// confirmar ya sea que el usuario exista , aqui hariamos una verificacion
// de usuario password, pero cuando yo valla el backend el back me deberia 
// regresar si el suariio exista, entonces deberiamos de tener un un usario
// este usuario lo tendremos que almacenar en algun lugar, este lugar sera un servicio, y sera 
// un servicio porque debe de estar disponible a lo largo de la aplicacion
// en todo momento yo necesito saber que usuario esta usando mi aplicacion


  login(){
    // este boton hara dos cosas
    // 1- ir al backend
    // 2-tener un usario

    // hagamos una redireccion pra esto usamos el Router lo inyectamos

    // video 222 en esta clase se hara un servicio donde se va a centralizar 
    // todo la informacion de la auntenticacion del usuario

    
    this.authService.login().subscribe(resp =>{
      
      console.log(resp);
      
      // hacemos una condicion, por si la respuesta es exitoza
      if (resp.id) {
        this.router.navigate(['./heroes'])
        
      }
      
    })
  }

}



 // todo la informacion de la auntenticacion del usuario, 
//  cuando se toque este boton se tendra que validar contra algun lugar
//  este algun lugar sera el back que tenemos corriendo, recorar que aqui vamos es a aprender a protejer rutas
//  no es  tanto una auntenticacion real, eso lo vamos aha hacer ,as adelante en estos momento lo vamos
//  ha hacer en base a la proteccion de 
