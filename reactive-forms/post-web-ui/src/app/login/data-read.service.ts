import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataReadService {

  constructor(private http: HttpClient) { }

  sendData(data: any): Observable<any>{
    console.log(data);
    console.log(<Observable<any>> this.http.post("http://localhost:5400/login", data));
    return <Observable<any>> this.http.post("http://localhost:5400/login", data);
  }
  
}
