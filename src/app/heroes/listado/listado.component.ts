import { Component, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes: string[] = ['Spider-Man','Iron-Man','Hulk','Thor','Capitan America'];
  heroeBorrado: string = '';

  borrarHeroe(indice:number):void{
    this.heroeBorrado=this.heroes.pop() || '';
  }

}
