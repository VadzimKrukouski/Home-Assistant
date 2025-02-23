import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BillsControllerService} from "../../api/bills-controller.service";
import {BillsDto} from "../../models/billsDto";
import {PageEvent} from "@angular/material/paginator";
import {StatisticControllerService} from "../../api/statistic-controller-service";
import {GeneralStatisticDto} from "../../models/GeneralStatisticDto";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-bills-info',
  templateUrl: './bills-info.component.html',
  styleUrls: ['./bills-info.component.css'],
  providers: [DatePipe]
})
export class BillsInfoComponent implements OnInit {
  bills: BillsDto[] = [];
  generalStatistics: GeneralStatisticDto[] = [];
  totalElements: number = 0;

  constructor(private router: Router,
              private billsService: BillsControllerService,
              private statisticService: StatisticControllerService,
              private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.getBills({page: "0", size: "10", sort: "date,desc"});
    this.getGeneralStatistic();
  }

  private getBills(request) {
    this.billsService.getAll(request)
      .subscribe(data => {
          this.bills = data['content'];
          this.totalElements = data['totalElements']
        },
        error => {
          console.log(error.error.message);
        });
  }

  private getGeneralStatistic() {
    this.statisticService.getGeneralStatisticByMonth().subscribe(data => {
        this.generalStatistics = data.map(item => ({
          ...item,
          date: new Date(item.date),
          formattedDate: this.datePipe.transform(new Date(item.date), 'MMM yyyy')
        }));
        this.generalStatistics.sort((a, b) => {
          return b.date.getTime() - a.date.getTime()
        })
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
