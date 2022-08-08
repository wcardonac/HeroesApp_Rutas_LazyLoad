import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { ActivatedRoute, Router} from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles:[`
    img {
      width: 100%;
      border-radius:5px
    }
  
  `

  ]
 
})
export class HeroeComponent implements OnInit {
  heroe!: Heroe
  constructor(
              private activatedRoute:ActivatedRoute,
              private heroesService:HeroesService,
              private router:Router)
              { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({id})=> this.heroesService.buscaridheroe(id)),
      tap(console.log)  
    ).subscribe(heroe=> {
      // console.log(heroe);
      this.heroe = heroe})
   
    
  }

  regresar(){
    this.router.navigate(['/heroes/listado'])
  }

}
