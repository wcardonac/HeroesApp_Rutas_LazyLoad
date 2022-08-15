import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from '../../../auth/services/auth.service';
import { Auth } from '../../../auth/interfaces/auth.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles:[`
    .container{
      margin:15px;
    }
  `
  ]
  
})
export class HomeComponent implements OnInit {

//  vamos a inyectar el servicio del authservice para usar para colocar el nombre
//  del usario que este usando mi app en el thml

  // auth!:Auth = this.authService.auth  esta es otra manera

  // lo que uiqero haver es que el auth se va a llenar con la informacion del authservice

  get auth(){
    return this.authService.auth;
  }

  constructor(private router:Router,
              private authService:AuthService) { }

  ngOnInit(): void {

    
     // this.heroesService.getheroeid().subscribe()
  }

  logout(){
    this.router.navigate(['./auth'])
  
  }

}
