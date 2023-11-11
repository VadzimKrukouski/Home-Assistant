import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  email = "";

  constructor(private router: Router) {
  }


  ngOnInit(): void {
  }


  openMetersPage() {
    this.router.navigate(['/meters']);
  }

  openBillsPage() {
    this.router.navigate(['/bills']);
  }
}
