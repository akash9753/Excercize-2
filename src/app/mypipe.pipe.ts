import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform( movie:any) {
    
    return movie.sort((a:any, b:any) => (a.rating > b.rating) ? 1 : -1);
  
  
}
desc(movie:any){
  return movie.sort((a:any, b:any) => (a.rating < b.rating) ? 1 : -1);
}
  }

