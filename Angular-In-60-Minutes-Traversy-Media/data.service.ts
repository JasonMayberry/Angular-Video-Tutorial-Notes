import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/map'; // 'rxjs/operators'; // 'rxjs/add/operator/map'; // 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: Http) {
  	console.log('Data Service Connected');
  }

  getPosts(){
  	return this.http.get('http://jsonplaceholder.typicode.com/posts')
  	// .map(res => res.json());

  }

}
