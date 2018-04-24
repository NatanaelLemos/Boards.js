import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  private apiRoot: string = 'http://localhost:3000'

  //http://localhost:3000/users/register
 //register
  constructor(private httpClient: HttpClient) { }

  ResigterUser(user) {
    let body = JSON.stringify(user);
    return this.httpClient.post(`${this.apiRoot}/users/register`, body, httpOptions);
  }

}