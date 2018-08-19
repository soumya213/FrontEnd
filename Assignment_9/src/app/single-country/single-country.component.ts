import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router'
import { ApiServiceService } from '../api-service.service';
import $ from 'jquery'
import { Location} from '@angular/common';



@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.css']
})
export class SingleCountryComponent implements OnInit {
  public countryDetail:any=[]
  public currency:any
  public language:any=[]

  constructor(public route:ActivatedRoute,public apiService:ApiServiceService,private location: Location) { }

  ngOnInit() {
    let country = this.route.snapshot.paramMap.get('country')   
    this.apiService.getSingleCountry(country).subscribe(
      data=>{
        this.countryDetail=data;
        this.appendHtml(this.countryDetail)
        
        
      },
      error=>{
        console.log('some error occured at single-country');
        console.log(error.errorMessage);       
      }
    )
  }

  appendHtml(details):any{
   
    for (var element of details) {
      for (var fileds in element) {
        if (fileds=='flag'){
          let flag=element['flag']  
          $('.container-fluid').css('background-image', 'url(' + flag + ')');
        }
             
       
        if (fileds=='currencies') {
          this.currency=element['currencies'][0]
          this.language=element['languages'][0] 
        }
        if (fileds!='currencies'&&fileds!='languages'&&fileds!='regionalBlocs') {
          if (typeof(element[fileds])==='object' && element[fileds]) {

            if (element[fileds].length===1 ) {
              if (typeof(element[fileds])!=='object') { 
              } else {
              $('.right').append(
                `
                <li class="list-group-item"><em>${fileds.toUpperCase()}</em> : ${element[fileds]}</li>
                `
              )
            }
            } else {
              $('.object').append(
                `
                <a class="list-group-item list-group-item-action active">
                ${fileds}
              </a>
                `
              )
                for (let index = 0; index < element[fileds].length; index++) {
                  $('.object').append(
                    `
                    <a class="list-group-item list-group-item-action field">${element[fileds][index]}</a>
                    `
                  )
                }
            }
            
          } else {
            $('.left').append(
              `
              <li class="list-group-item"><em>${fileds.toUpperCase()}</em> : ${element[fileds]}</li>
              `
            )
          }
          
        }
        
      }
    }
  }
  goBack() {
    this.location.back();
  }
}