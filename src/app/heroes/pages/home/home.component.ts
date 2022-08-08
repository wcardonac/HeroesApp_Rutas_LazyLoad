import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';


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

  debouncer : Subject<string> = new Subject();

  constructor(private activaRoute:ActivatedRoute) { }

  ngOnInit(): void {

    
     // this.heroesService.getheroeid().subscribe()
  }

}
