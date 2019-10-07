import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private baseUrl = 'https://young-woodland-47552.herokuapp.com/persons';
  private userUrl = 'http://localhost:8080/user-portal/user/api';

person: Person = new Person(4, "Daniel","Kassa");

  constructor(private http: HttpClient) { }

  list(): Observable<Person[]> {

    const url = `${this.baseUrl}/`;
    return this.http.get(url).pipe(
      map((data: any[]) => data.map((person: any) => new Person(
      person.id,
      person.first_name,
      person.last_name,
      ))),
    );
  }

  public getPerson() {
    return this.http.get<Person[]>(this.userUrl);
  }

  public deletePerson(person) {
    return this.http.delete(this.userUrl + "/"+ person.id);
  }

  public createPerson(person) {
    return this.http.post<Person>(this.userUrl, person);
  }

}
