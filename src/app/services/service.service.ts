import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) { }

  getPerson() {
    return this.http.get<Person[]>(this.url + '/list');
  }

  getPersonId(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  savePerson(person: Person){
    return this.http.post<Person>(this.url, person);
  }

  updatePerson(person: Person) {
    console.log('usario',person);
    return this.http.put<Person>(this.url + '/' + person.id, person);
  }

  deletePerson(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

}
