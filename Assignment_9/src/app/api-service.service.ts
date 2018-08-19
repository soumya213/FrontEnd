import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  public baseUrl='https://restcountries.eu/rest/v2/region/'
  constructor(private http:HttpClient) { }

  getAllCountry(region):any{  
    let allCountry=this.http.get('https://restcountries.eu/rest/v2/region/'+region.toLowerCase());
    return allCountry;
  }

  getSingleCountry(name):any{
    let country=this.http.get('https://restcountries.eu/rest/v2/name/'+name);
    return country
  }

  getAllCountrywithOutRegion():any{  
    let allCountry=this.http.get('https://restcountries.eu/rest/v2/');
    return allCountry;
  }
}
