import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { ApiServiceService } from '../api-service.service';
import $ from 'jquery';

import { Location } from '@angular/common';

@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.css']
})
export class HouseViewComponent implements OnInit {
  public perticularHouse=[]
  constructor(private _location:Location,private _route:ActivatedRoute,private router:Router,public apiService:ApiServiceService) { }

  ngOnInit() {

    let houseUrl=this._route.snapshot.paramMap.get("houseUrl")
    this.apiService.getperticularHouse(houseUrl).subscribe(
      data=>{
        this.perticularHouse=data;
        console.log(this.perticularHouse);
        for (let  key in this.perticularHouse ) {
          if (typeof(this.perticularHouse[key])==='object') {
            $(".card-body").append(`<strong>${key.toUpperCase()}:</strong><br>`)
            for(let x in this.perticularHouse[key] ){              
              $(".card-body").append(`${this.perticularHouse[key][x]}<br>`)
            }
          } else {
            $(".card-body").append(`<strong>${key.toUpperCase()}</strong> : ${this.perticularHouse[key]}<br>`)
          }
          }
        return this.perticularHouse
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
