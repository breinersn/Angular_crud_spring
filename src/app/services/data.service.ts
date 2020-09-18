import { Injectable } from '@angular/core';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  person: Person = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    roles: [
      {
        id: 2,
        name: 'user'
      }
    ]

  };

  constructor() { }
}
