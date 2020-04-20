import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getEpsodes() {
    return this.http.get('https://www.breakingbadapi.com/api/episodes')
  }

  getEpsode(id) {
    return this.http.get('https://www.breakingbadapi.com/api/episodes/${id}')
  }
}