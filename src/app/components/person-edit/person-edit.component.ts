import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/person';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {

  
  addressForm = this.fb.group({
    firstName: [null, Validators.compose([
      Validators.required, Validators.minLength(4), Validators.maxLength(20)])
    ],
    lastName: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(30)])
    ],
    shipping: ['free', Validators.required]
  });

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

  constructor(private fb: FormBuilder, private service: ServiceService,
              private router: Router, public dataService: DataService) { }

  ngOnInit(): void {
    this.person = this.dataService.person;
  }

  actualizar(person: Person) {
    this.service.updatePerson(person).subscribe(resp => {
      if (resp) {
        this.router.navigate(['components/list']);
      }
    });
  }

}
