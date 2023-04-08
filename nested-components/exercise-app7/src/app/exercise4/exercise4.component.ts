import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise4',
  templateUrl: './exercise4.component.html',
  styleUrls: ['./exercise4.component.css']
})
export class Exercise4Component implements OnInit {

  genreName!:string;
  selectedGenre: number = 1;

  movieGenres :any[] =  [
    {genreId: 1, genreName: "Action"},
    {genreId: 2, genreName: "Drama"},
    {genreId: 3, genreName: "Romance"},
    {genreId: 4, genreName: "SkyFi"},
    {genreId: 5, genreName: "Cartoon"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onBookSelected(genre: string){
    console.log(genre);
    this.genreName = genre;
  }

  onSelect(genre: string){
    console.log(genre);
    this.genreName = genre;
  }

}
