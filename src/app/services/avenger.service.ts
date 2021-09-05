import { Injectable } from '@angular/core';
import { Avenger } from '../models/avenger';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AvengerService {

  private apiUrl = 'http://localhost:5000';

  constructor(
    private http:HttpClient
  ) { }

  async get(id:any = null): Promise<Avenger[]> {
    let url = `${this.apiUrl}/avengers`;

    if(id != null && id != 0) {
      url = `${this.apiUrl}/avengers/${id}`;
    }
    let avengers = await this.http.get<Avenger[]>(url)
    .toPromise()
    .then(res => {
      return res;
    })

    return avengers;
  }

  async insert(avenger:Avenger): Promise<Avenger> {
    let newAvenger:Avenger = await this.http.post<Avenger>(`${this.apiUrl}/avengers`, avenger)
    .toPromise()
    .then(res => {
      return res;
    })

    return newAvenger;
  }


}
