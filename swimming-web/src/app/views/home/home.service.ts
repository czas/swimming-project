import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/shared/models/news.type';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private url: string = 'http://localhost:3000/news';

  constructor(private http: HttpClient) {}

  public getNews$(): Observable<News[]> {
    return this.http.get<News[]>(this.url);
  }
}
