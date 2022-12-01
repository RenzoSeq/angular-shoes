import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,  tap } from 'rxjs';
import { shoe} from './shoes-list/shoes'


const URL = "https://638816cea4bb27a7f77d90a3.mockapi.io/api/shoes";

@Injectable({
  providedIn: 'root'
})
export class ShoesDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<shoe[]>{

    
     return this.http.get<shoe[]>(URL)
     .pipe(
         tap((shoes: shoe[]) => shoes.forEach(shoes => shoes.quantity = 0))
     )
  }
}
