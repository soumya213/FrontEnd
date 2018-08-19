import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { ApiServiceService } from '../api-service.service';
import $ from 'jquery';
import { Location} from '@angular/common';

@Component({
  selector: 'app-all-country',
  templateUrl: './all-country.component.html',
  styleUrls: ['./all-country.component.css']
})
export class AllCountryComponent implements OnInit {

  public countryData:any=[]
  public temporaryData:any=[]

  constructor(public routes:ActivatedRoute,public apiService:ApiServiceService,public router:Router,private location: Location ) { }

  ngOnInit() {
    let region= this.routes.snapshot.paramMap.get('region');
    
    if (region.substr(region.length-3)==='*c*') {
      let currencyName=region.slice(0,-3)
      this.apiService.getAllCountrywithOutRegion().subscribe(
        data=>{
          this.countryData=data;
          $('.para').append(`
          <h5>Please find the list of Countries using Currency : ${this.countryData[0].currencies[0].name}</h5>
          `)
          for (let index = 0; index < this.countryData.length; index++) {
            if (this.countryData[index].currencies[0].name==currencyName) {
              this.temporaryData=this.countryData[index]              
            }
          }         
          
          this.countryData=this.temporaryData          
        },
        error=>{
          console.log("some error occured in all-country");
          console.log(error.errorMessage);
        }
      )

    } else if(region.substr(region.length-3)==='*l*'){
      //for language
      let LanguageName=region.slice(0,-3)
      this.apiService.getAllCountrywithOutRegion().subscribe(
        data=>{
          this.countryData=data;
          $('.para').append(`
          <h5>Please find the list of Countries using Language : ${this.countryData[0].languages[0].name}</h5>
          `)
          for (let index = 0; index < this.countryData.length; index++) {
            if (this.countryData[index].languages[0].name==LanguageName) {
              this.temporaryData=this.countryData[index]            
            }
          }         
          this.countryData=this.temporaryData
    },
    error=>{
      console.log("some error occured in all-country");
      console.log(error.errorMessage);
    }
  )}
    else{
      this.apiService.getAllCountry(region).subscribe(
        data=>{
          this.countryData=data;
        },
        error=>{
          console.log("some error occured in all-country");
          console.log(error.errorMessage);
        }
      )
    }   
  }

  goBack() {
    this.location.back();
  }
}
