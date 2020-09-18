import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  list() {

    this.router.navigate(['components/list']);

    // this.service.getPersonas().subscribe(
    //   data => {
    //     if (data) {
    //       this.router.navigate(['components/list']);
    //       // , JSON.stringify(data)
    //     }
    //   });
  }

  add() {
    this.router.navigate(['components/add']);
  }
}
