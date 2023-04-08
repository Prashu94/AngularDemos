import { Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  bookNameSelected!:string;

  books: any[]=[
    {bookId: 1, bookName: "AC1", genre: "Action"},
    {bookId: 2, bookName: "D1", genre: "Drama"},
    {bookId: 3, bookName: "AC2", genre: "Action"},
    {bookId: 4, bookName: "D2", genre: "Drama"},
    {bookId: 5, bookName: "AC3", genre: "Action"},
    {bookId: 6, bookName: "SK1", genre: "SkyFi"},
    {bookId: 7, bookName: "AC4", genre: "Action"},
    {bookId: 8, bookName: "SK2", genre: "SkyFi"},
    {bookId: 9, bookName: "CR1", genre: "Cartoon"},
    {bookId: 10, bookName: "AC5", genre: "Action"},
    {bookId: 11, bookName: "R1", genre: "Romance"},
    {bookId: 12, bookName: "AC6", genre: "Action"},
    {bookId: 13, bookName: "R2", genre: "Romance"},
    {bookId: 14, bookName: "CR2", genre: "Cartoon"},
  ];

  booksByGenre!:any[];

  @Input()
  set bookGenre(bookGen: string){
    console.log(bookGen);
    this.booksByGenre = [];
    this.booksByGenre.push(this.books.filter(book => book.genre === bookGen));
    //this.booksByGenre = [...this.books.filter(book => book.genre === bookGen)];
    console.log(this.booksByGenre);
    this.bookNameSelected = undefined;
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(book: string){
    console.log(book);
    this.bookNameSelected = book;
  }
}
