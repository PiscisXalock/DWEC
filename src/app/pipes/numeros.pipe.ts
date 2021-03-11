import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numeros'
})
export class NumerosPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if(args[0] == "cuadrado"){
      return value;
    }else if(args[0] == "raiz"){
      return Math.sqrt(value);
    }else if((args[0] == "aletras") && (value < 10)){
      const letras = ['a','b','c','d','e','f','g','h','i','j']
      return letras[value - 1];
    }else return null
    
  }

}
