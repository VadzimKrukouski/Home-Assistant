import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BillsControllerService} from "../../api/bills-controller.service";
import {BillsDto} from "../../models/billsDto";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-bills-info',
  templateUrl: './bills-info.component.html',
  styleUrls: ['./bills-info.component.css']
})
export class BillsInfoComponent implements OnInit {
  bills: BillsDto[] = [];
  totalElements: number = 0;

  constructor(private router: Router,
              private billsService: BillsControllerService) {
  }

  ngOnInit(): void {
    this.getBills({page: "0", size: "10", sort: "date,desc"});
  }

  private getBills(request) {
    console.log("Begin found")
    this.billsService.getAll(request)
      .subscribe(data => {
        this.bills = data['content'];
        console.log("Bills: " + this.bills);
        this.totalElements = data['totalElements']
        console.log("Total: " + this.totalElements);
      },
        error => {
        console.log(error.error.message);
        });
  }

  nextPage(event: PageEvent) {
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    this.getBills(request);
  }

  return() {
    this.router.navigate(['/bills'])
  }

  returnToHomePage() {
    this.router.navigate(['/start'])
  }

}
