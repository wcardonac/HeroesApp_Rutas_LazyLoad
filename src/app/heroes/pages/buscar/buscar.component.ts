import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
 
})
export class BuscarComponent implements OnInit {
  termino:string = '';
  heroes:Heroe[] = [];

  heroeseleccionado: Heroe | undefined

  constructor(private heroesService:HeroesService) { }

  ngOnInit(): void {
  }


  buscando(){
    this.heroesService.sugerenciasheroes(this.termino.trim()).subscribe(heroes=> this.heroes = heroes)
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent){
    if (!event.option.value) {
      this.heroeseleccionado = event.option.value
      console.log('no hay valor');
      
      return;
    }
    const heroe= event.option.value;
    this.termino = heroe.superhero;

    this.heroesService.buscaridheroe(heroe.id)
    .subscribe(heroe=> this.heroeseleccionado = heroe)
    console.log(heroe);
    

  }

}
