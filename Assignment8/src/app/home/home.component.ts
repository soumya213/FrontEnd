import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import $ from 'jquery';
import { element } from '../../../node_modules/protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allBooks = []
  public allCharacter = []
  public allHouses = []

  constructor(public apiService: ApiServiceService) { }

  ngOnInit() {
    this.apiService.getAllBooks().subscribe(

      data => {
        this.allBooks = data;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    );

    this.apiService.getAllCharacter().subscribe(

      data => {
        this.allCharacter = data;
        return this.allCharacter;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    );

    this.apiService.getAllHouses().subscribe(

      data => {
        this.allHouses = data;
        return this.allHouses;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    );
  }

}
