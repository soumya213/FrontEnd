import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {HttpErrorResponse,HttpClientModule, HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  
  // public baseUrl:"https://www.anapioficeandfire.com/api/"
  constructor(private _http:HttpClient) {}

  
   getAllBooks(): any {
    let allBooks = this._http.get("https://www.anapioficeandfire.com/api/books")
    return allBooks;
  }// end get all books

  getPerticularBook(url):any{
    let perticularBook = this._http.get(url)
    return perticularBook
  }//end get perticularBook

  getAllCharacter():any{
    let allCharacter=this._http.get("https://www.anapioficeandfire.com/api/characters")
    return allCharacter
  }//end getAllCharacter

  getPerticularCharacter(url):any{
    let perticularcharacter = this._http.get(url)
    return perticularcharacter

  }//end getPerticularCharacter

  getAllHouses():any{
    let allHouses=this._http.get("https://www.anapioficeandfire.com/api/houses")
    return allHouses
  }//end getAllHouses

  getperticularHouse(url):any{
    let perticularHouse = this._http.get(url)
    return perticularHouse
  }//end getAllHouses



}
