import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {


  persons: Person[];
  
  constructor(private personService: PersonService) {
    this.persons = [];
  }

  ngOnInit() {
    // (3) Subscribe
     this.personService.list().subscribe((persons: Person[]) => {
      // (4) Store
     this.persons = persons; 


    //});

   // this.personService.getPerson().subscribe((persons: Person[])=>{
  //    this.persons = persons;
    });
  }

}
