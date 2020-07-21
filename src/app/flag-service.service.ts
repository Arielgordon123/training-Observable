import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Flag } from './Model/flag';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlagService {

  apiUrl = "https://restcountries.eu/rest/v2/all?fields=name;flag;region;timezones";
  constructor(private http: HttpClient) { }
  
  getFlagList ():Observable<Flag[]> {
    return this.http.get<Flag[]>(this.apiUrl);
  }
}
