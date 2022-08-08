import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
 
})
export class ListadoComponent implements OnInit {
  heroes: Heroe[] = []
  constructor(private heroesService:HeroesService) { }//cn esto tengo todos los metodos y propiedades que tenga en mi servicio

  ngOnInit(): void {
    // tengo que suscribir el servicio con suscribe
    this.heroesService.getheroes()
      .subscribe( heroe => this.heroes = heroe )
  }

}
