import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Person } from 'src/app/model/person';

import { MatPaginator } from '@angular/material/paginator';

import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Person[];

  displayedColumns: string[] = ['id', 'nombre', 'apellidos', 'email', 'Acciones'];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  // dataSource = new MatTableDataSource<Person>();
  // dataSource = new MatTableDataSource<Person>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  constructor(private service: ServiceService,
              public dataService: DataService,
              private router: Router) { }

  ngOnInit() {

    this.service.getPerson().subscribe(
      data => {
        console.log(data);
        this.persons = Object.keys(data).map(key => data[key]);
        // this.dataSource.data.push( m );
        //  this.dataSource = [...this.dataSource];  //refresh the dataSource
      });

    // this.dataSource.paginator = this.paginator;
    // console.log(this.dataSource);
  }

  edit(person: Person) {
    this.dataService.person = person;
    this.router.navigate(['components/edit']);
  }

  delete(person: Person) {
    this.service.deletePerson(person.id).subscribe(resp => {
      if(resp) {
        alert('Usuario eliminado!!');
        this.persons = this.persons.filter(p => p !== person);
      }
    }
    );
  }

}

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// let ELEMENT_DATA: Person[] = this.dat
  // { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  // { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  // { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  // { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  // { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  // { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  // { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  // { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  // { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  // { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  // { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  // { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  // { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  // { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  // { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  // { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  // { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  // { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  // { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  // { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
// ;

//   ngOnInit() {


//     this.service.getPersonas().subscribe(
//       data => {
//         this.persons = data;
//       });
//       this.dataSource.paginator = this.paginator;
//     }

// }


  // this.service.getPersonas().subscribe(
    //   data => {
    //     let d: any  = Object.keys(data).map(key => data[key]);
    //     this.dataSource.data.push(d);  //add the new model object to the dataSource
    //     //  this.dataSource = [...this.dataSource];  //refresh the dataSource
    //     console.log(this.dataSource);
    //   });
    // this.socket.on('newMessage', function(event) {
    //   console.log('Datasource', event);
    //   this.dataSource.MatTableDataSource.filteredData.push(event);
    // });