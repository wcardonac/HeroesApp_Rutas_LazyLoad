import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles:[`
    img{
      width:100;
      border-radius:5px
    }
  `]
 
})
export class AgregarComponent implements OnInit {

  publisher = [
    {
      id:'DC Comics',
      desc:'DC - Comics'
    },
    {
      id:'Marvel Comics',
      desc:'Marvel - Comics'
    },
  ]

// estos campos del arregloo lo vamos a asignar en el html
  heroe: Heroe = {
    superhero:'',
    alter_ego:'',
    characters:'',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img:''
  }
// vamos a inyectar el sercivio para poder usar el metodo que acabamos de hacer par usar la peticion de tipo post
// activatedRoute:ActivatedRoute con esto leemos el url, osea cuando entro a la pantalla de editar
// voy a leer el id con activatedRoute:ActivatedRoute
// y es recomendable hacer el llamado en en ngoninit


// video 213 vamos a usar un snakbar esto lo vamoas a implememtar para cuando 
// el cliente guarde le salga un mensaje de confrimacion de que hizo algun cambio

// inyectamos ese servicio de snackbar

//para usar el dialog debemos de inyectarlo

constructor( private heroesService: HeroesService,
             private activatedRoute:ActivatedRoute,
             private router:Router,
             private snackbar:MatSnackBar,
             private dialog: MatDialog) { }

  ngOnInit(): void {

    if(!this.router.url.includes('editar')){
      return;
    }
    
    // vamos a verificar el url necesito el id esto se va a 
    // ejecutar si estamos en la pestaña de editar
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.heroesService.buscaridheroe(id))
    )
      .subscribe(heroe => this.heroe = heroe);
      
  }
  // con este metodo capturamos los valores de los inpit
  guardar(){
    // vanos a colocar una minima validacion del formulario

    // pero para insertar en la base de datos necesitamos hacer el llamado mediante el servicio
    if(this.heroe.superhero?.trim().length === 0){
      return;

    }

    if(this.heroe.id){
      //actualizar para actualizar vamos a hacer una peticion put
      this.heroesService.actualizarheroe(this.heroe)
        .subscribe(heroe => this.mostrarsnackbar('resgistro actualizado'))
    }else{
      // crear
      this.heroesService.agregarheroe( this.heroe)
      .subscribe(heroe=>{
       
        // cuando inseretemos el nuevo heroe vamos a navegar a una ruta,
        // para esto vamos a usar el router.navigate
        this.router.navigate(['/heroes/editar',heroe.id]);
        this.mostrarsnackbar('Registro creado') //esta funcion es para desplegar un mensaje
   
      })
    }

  }

  borrarHeroe(){

    // para usar el dialog vamos a crearnos un nuevo componnete
    //vamos a trabajar el con dialog

    // vamos a 
   const dialaog = this.dialog.open(ConfirmarComponent,{
      width: '250px',
      // con esto ya le estoy enviando la informacion al componente hijo que en este caso es
      // confirmar component donde tengo el dialog
      data: this.heroe //aqui puedo mandar cualquier informacion
    });

    dialaog.afterClosed().subscribe(
      (respuesta)=>{
        // ahora hacemos el condicionallpor si es true para que sea borrado
       if (respuesta) {
         this.heroesService.eliminarHeroe(this.heroe.id!)
           .subscribe(resp => {
             this.router.navigate(['/heroes'])
           })
        
       }
        
      }
    )
  }

  // ahora vamos a hacer un motodo para llamar el snackbar
  // este snackbar va a recibir un argumento que sera el mensaje
  mostrarsnackbar(mensaje:string){

    this.snackbar.open(mensaje, 'cerrar',{
      duration:2500
    })
    // despues de hacer esta configuracion este metodo lo vamos a usar

  }
  // en el video 214 vamos a implememtar un mensaje a la hora de darle al boton de eliminar
  // para preguntar antes de elimiar algun regustro si esta seguro de eliminarlo 
  // esto la vamos a ha hacer con el matdialog

// en el video 215 vamos a comunicar el componnete padre que es el agregar.compomnetn hacia el componente hijo del dialog




}
