import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http) { }

  registerUser(user){
    let headers= new Headers();
    headers.append('content-type','application/json');
    return this.http.post('http://localhost:3000/api/register',user,{headers:headers}).pipe(map(res=>res.json()));
  }
  authenticateUser(user){
    let headers = new Headers();
    headers.append('content-type','application/json');
    return this.http.post('http://localhost:3000/api/login',user,{headers:headers}).pipe(map(res=> res.json()));
  }
  getLoginPage(){
    return this.http.get('http://localhost:3000/api/login').pipe(map(res=>res.json()))
  }

}
