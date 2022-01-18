import { Component, VERSION } from '@angular/core';
import {MypipePipe} from './mypipe.pipe'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  movies=[
    {movieName:'Avengers', rating:3},
    {movieName:'Godzilla', rating:1},
    {movieName:'Jaws the Revenge', rating:2},
    {movieName:'Rocky', rating:4},
    {movieName:'Star Wars', rating:5},
  ]

  constructor(private movPipe:MypipePipe) { }

  ngOnInit(): void {
  }
  changeOrderAsc(){
    //this.reverse=!this.reverse
    //movPipe:this.movies
    this.movies = this.movPipe.transform(this.movies)
 }
 changeOrderDesc(){
  //this.reverse=!this.reverse
  //movPipe:this.movies
  this.movies = this.movPipe.desc(this.movies)
}

}
