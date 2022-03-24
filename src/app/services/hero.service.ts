import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/models/hero';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/global-variables';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private url = apiUrl + '/heroes';

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.url);
  }

  getHeroById(id: number): Observable<Hero> {
    return this.http.get<Hero>(this.url + '/' + id);
  }

  addHero(name: string): Observable<Hero> {
    return this.http.post<Hero>(this.url, { name: name });
  }

  editHero(heroes: Hero): Observable<Hero> {
    return this.http.put<Hero>(this.url + '/' + heroes.id, {
      name: heroes.name,
    });
  }

  deleteHero(id: number): Observable<Hero> {
    return this.http.delete<Hero>(this.url + '/' + id);
  }
}
