import { Pipe, PipeTransform} from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';


@Pipe({
    name:'imagen'
})

export class HeroePipe implements PipeTransform{
    
    transform(heroe: Heroe): string {
        console.log('pipe imagen se proceso..');
       if (!heroe.id && !heroe.alt_img) {
        return 'assets/no-image.png'
       } else if(heroe.alt_img){
        return heroe.alt_img
       }
    
       return `assets/heroes/${ heroe.id}.jpg`;
    }
}