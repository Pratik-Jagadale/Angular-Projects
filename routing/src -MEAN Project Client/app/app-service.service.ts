import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import {getBathes} from '.../Mean/api'

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private _http: HttpClient) {

  }

  getBatches() {
    return this._http.get('.../Mean/api/getBatches')
  }
}
