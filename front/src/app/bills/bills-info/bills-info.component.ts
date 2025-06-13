import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BillsControllerService} from "../../api/bills-controller.service";
import {BillsDto} from "../../models/billsDto";
import {PageEvent} from "@angular/material/paginator";
import {StatisticControllerService} from "../../api/statistic-controller-service";
import {GeneralStatisticDto} from "../../models/GeneralStatisticDto";
import {DatePipe} from "@angular/common";
import {PageRequest, PageResponse} from "../../models/page-request.model";

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

  private getBills(request: PageRequest) {
    this.billsService.getAll(request)
      .subscribe({
        next: (data: PageResponse<BillsDto>) => {
          this.bills = data.content;
          this.totalElements = data.totalElements;
        },
        error: (error) => {
          console.error('Error fetching bills:', error);
        }
      });
  }

  private getGeneralStatistic() {
    this.statisticService.getGeneralStatisticByMonth().subscribe({
      next: (data) => {
        this.generalStatistics = data.map(item => ({
          ...item,
          date: new Date(item.date),
          formattedDate: this.datePipe.transform(new Date(item.date), 'MMM yyyy')
        }));
        this.generalStatistics.sort((a, b) => {
          return b.date.getTime() - a.date.getTime()
        });
      },
      error: (error) => {
        console.error('Error fetching statistics:', error);
      }
    });
  }

  nextPage(event: PageEvent) {
    const request: PageRequest = {
      page: event.pageIndex.toString(),
      size: event.pageSize.toString(),
      sort: "date,desc"
    };
    this.getBills(request);
  }
}
