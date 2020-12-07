import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';
import { environment } from '../../environments/environment.prod';


const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;
const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  private ejecutarQuery(query: string) {
    query = apiUrl + query;
    return this.http.get(query, { headers });
  }

  getTopHeadlines() {
    return this.ejecutarQuery(`/top-headlines?country=us`);
    // return this.http.get<RespuestaTopHeadlines>(`http://newsapi.org/v2/top-headlines?country=us&apiKey=688f9b333ec54e8b91d1358cbf3b793f`);
  }

  getTopHeadlinesCategoria(categoria: string) {
    return this.ejecutarQuery(`/top-headlines?country=us&category=business`);
  }


}
