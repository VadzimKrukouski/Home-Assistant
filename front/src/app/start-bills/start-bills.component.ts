import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-start-bills',
  templateUrl: './start-bills.component.html',
  styleUrls: ['./start-bills.component.css']
})
export class StartBillsComponent implements OnInit{
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }


  formDataBills() {
    this.router.navigate(['/formDataBills']);
  }

  infoBills() {
    this.router.navigate(['/infoBills']);
  }

  returnToHomePage() {
    this.router.navigate(['/start'])
  }
}
