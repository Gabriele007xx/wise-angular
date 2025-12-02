import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdService {

  constructor() {}

  // declare and initialize the quote property
  // which will be a BehaviorSubject
  id = new BehaviorSubject(NaN);

  // expose the BehaviorSubject as an Observable
  currentId = this.id.asObservable();

  // function to update the value of the BehaviorSubject
  updateQuote(id: number){
    this.id.next(id);
  }
}