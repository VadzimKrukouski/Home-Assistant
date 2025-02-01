import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BillsControllerService} from "../../api/bills-controller.service";
import {BillsDto} from "../../models/billsDto";
import {PageEvent} from "@angular/material/paginator";
import {StatisticControllerService} from "../../api/statistic-controller-service";
import {GeneralStatisticDto} from "../../models/GeneralStatisticDto";

@Component({
  selector: 'app-bills-info',
  templateUrl: './bills-info.component.html',
  styleUrls: ['./bills-info.component.css']
})
export class BillsInfoComponent implements OnInit {
  bills: BillsDto[] = [];
  generalStatistics: GeneralStatisticDto[] = [];
  totalElements: number = 0;

  constructor(private router: Router,
              private billsService: BillsControllerService,
              private statisticService: StatisticControllerService) {
  }

  ngOnInit(): void {
    this.getBills({page: "0", size: "10", sort: "date,desc"});
    this.getGeneralStatistic();
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

  private getGeneralStatistic() {
    this.statisticService.getGeneralStatisticByMonth().subscribe(data => {
        this.generalStatistics = data;
        this.generalStatistics.forEach(t => t.date = (t.date?.substring(0, 7)));
        console.log("Statistics: " + this.generalStatistics);
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
}
