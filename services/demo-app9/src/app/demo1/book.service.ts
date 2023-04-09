import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private booksUrl = './assets/books.json';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(
      this.booksUrl
    );
  }
}
