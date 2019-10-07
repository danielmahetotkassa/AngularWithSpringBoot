import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/model/person';

@Component({
  selector: 'app-personadd',
  templateUrl: './personadd.component.html',
  styleUrls: ['./personadd.component.css']
})
export class PersonaddComponent {

  person: Person = new Person(2,"Daniel","Kassa");

  constructor(private router: Router, private personService: PersonService) {

  }

  createPerson(): void {
    this.personService.createPerson(this.person)
        .subscribe( data => {
          alert("User created successfully.");
        });

  };

}
