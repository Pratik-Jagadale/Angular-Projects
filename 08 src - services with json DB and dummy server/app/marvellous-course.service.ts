import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IBatches } from './batches';

@Injectable({
  providedIn: 'root'
})
export class MarvellousCourseService {

  private _url: string = "/assets/Data/batches.json";

  constructor(private http: HttpClient) { }

  getBatchDetails(): Observable<IBatches[]> {
    return this.http.get<IBatches[]>(this._url);
  }
}
