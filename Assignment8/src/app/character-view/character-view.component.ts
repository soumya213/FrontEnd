import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { ApiServiceService } from '../api-service.service';
import $ from 'jquery';
import { Location } from '@angular/common';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent implements OnInit {
  public perticularCharacter=[]

  constructor(private _location:Location,private _route:ActivatedRoute,private router:Router,public apiService:ApiServiceService) { }

  ngOnInit() {
    let characterUrl=this._route.snapshot.paramMap.get("characterUrl")
    this.apiService.getperticularHouse(characterUrl).subscribe(
      data=>{
        this.perticularCharacter=data;
        console.log(this.perticularCharacter);
        for (let  key in this.perticularCharacter ) {
          if (typeof(this.perticularCharacter[key])==='object') {
            $(".card-body").append(`<strong>${key.toUpperCase()}</strong><br>`)
            for(let x in this.perticularCharacter[key] ){              
              $(".card-body").append(`${this.perticularCharacter[key][x]}<br>`)
            }
          } else {
            $(".card-body").append(`<strong>${key.toUpperCase()}</strong> : ${this.perticularCharacter[key]}<br>`)
          }
          }
        return this.perticularCharacter
      },
      error=>{
        console.log("something went wrong");
        console.log(error.errormessage);
      }
    ) 
    
  }

  goBackToPreviousPage():any{
    this._location.back();
  }

}
