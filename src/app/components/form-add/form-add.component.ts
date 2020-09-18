import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
import { Person } from '../../model/person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})

export class FormAddComponent {

  addressForm = this.fb.group({
    firstName: [null, Validators.compose([
      Validators.required, Validators.minLength(4), Validators.maxLength(20)])
    ],
    lastName: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(30)])
    ],
    email: [null, Validators.compose([
      Validators.required,
      Validators.maxLength(100),
      Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}')
    ])
    ],
    password: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(30)])
    ],
    /* roles: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(30)])
    ], */
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

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

  constructor(private fb: FormBuilder, private service: ServiceService, private router: Router) { }

  save() {

    this.service.savePerson(this.person).subscribe(data => {
      if (data) {
        alert('Información Agragada!');
        this.router.navigate(['components/list']);
      }

    });
  }
}
