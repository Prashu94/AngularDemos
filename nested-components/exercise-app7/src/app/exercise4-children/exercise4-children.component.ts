import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercise4-children',
  templateUrl: './exercise4-children.component.html',
  styleUrls: ['./exercise4-children.component.css']
})
export class Exercise4ChildrenComponent implements OnInit {

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

  @Input() bookGenre!:string;
  @Output() bookSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.filterBookByGenre(this.bookGenre);
  }

  onSelect(book: string){
    console.log(`Child: ${book}`);
    this.bookNameSelected = book;
    this.bookSelected.emit(book);
  }

  filterBookByGenre(genre: string):void{
    this.booksByGenre = this.books.filter(book => book.genre == genre);
    if(this.booksByGenre.length > 0){
      this.bookNameSelected = this.booksByGenre[0].bookName;
    }
  }

}
