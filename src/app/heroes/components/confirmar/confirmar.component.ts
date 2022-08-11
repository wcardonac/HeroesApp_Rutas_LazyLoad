import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroes.interface';


@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent implements OnInit {

  // para poder darle funcionalidad a los botones de nuestro dialog necesitamos inyectar el matdiologREF

// aqui vamos recibir la data que mando desde el componete padre
// y no lo vamos a hacer mediante el input por que no lo estamos mandando desde el html 
// y no es asi como lo definio angular material

// @Inject(MAT_DIALOG_DATA) public data: DialogData con esto vamos a leer la data que biene desde
// el padre lo inyectamos en el costructor
// quine sea que llame el dialog y la data va a ser almacenada en la propiedad data
  constructor(private dialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Heroe) { }

  ngOnInit(): void {
   

  }

  // vamos a trabajar con el matdialog 
  borrar(){

    this.dialogRef.close(true)

  }
  
  cerrar(){
    
    // para cerrarlo es muy sencillo llamomos a la funcion close de matdialogref
    this.dialogRef.close()
  }

}
