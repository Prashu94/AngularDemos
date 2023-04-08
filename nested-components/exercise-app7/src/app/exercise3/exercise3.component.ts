import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrls: ['./exercise3.component.css']
})
export class Exercise3Component implements OnInit {
  genreName!:string;

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

  onSelect(genre: string){
    console.log(genre);
    this.genreName = genre;
  }

}
