import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getEpisodes() {
    return this.http.get('https://www.breakingbadapi.com/api/episodes')
  }

  getEpisode(id) {
    return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`)
  }
}