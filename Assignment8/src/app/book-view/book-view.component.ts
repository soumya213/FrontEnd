import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { ApiServiceService } from '../api-service.service';
import $ from 'jquery';

import { Location } from '@angular/common';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css'],
  // providers:[Location]
})
export class BookViewComponent implements OnInit {
  public perticularBookData:any;
  public normalKey=[];
 
  
  constructor(private _location?:Location,private _route?:ActivatedRoute,private router?:Router,public apiService?:ApiServiceService) { }

  ngOnInit() {
    let blogUrl=this._route.snapshot.paramMap.get("bookUrl")
    
    console.log(blogUrl);

    this.apiService.getPerticularBook(blogUrl).subscribe(
      data=>{
        this.perticularBookData=data;
        console.log(this.perticularBookData);
        for (let  key in this.perticularBookData ) {
          if (typeof(this.perticularBookData[key])==='object') {
            $(".key").append(`<strong>${key.toUpperCase()}</strong><br>`)
            for(let x in this.perticularBookData[key] ){              
              $(".value").append(`${this.perticularBookData[key][x]}<br>`)
            }
          } else {
            this.normalKey.push(key)
            $(".key").append(`<strong>${key.toUpperCase()} :</strong><br>`)
            $(".value").append(`${this.perticularBookData[key]}<br>`)
          }
          }
        return this.perticularBookData
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
 
getNormalKey(){
  console.log("HI");
  console.log(this.normalKey);
  
}

}


let bookView = new BookViewComponent()
bookView.getNormalKey()
