import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letraDNI'
})
export class LetraDNIPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if(args[0] == "letra"){
      const A=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
      return A[value % 23];
    }
  }

}
