import {Component, OnInit} from '@angular/core';
import {GeneralStatisticDto} from "../../models/GeneralStatisticDto";
import {Router} from "@angular/router";
import {StatisticControllerService} from "../../api/statistic-controller-service";
import {DateAdapter, MAT_DATE_LOCALE} from "@angular/material/core";
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter} from "@angular/material-moment-adapter";
import {NgForm} from "@angular/forms";
import {TypeBills} from "../bills.component";
import {ChartService} from "../../service/chart.service";

export const TypeMapping: Record<TypeBills, string> = {
  [TypeBills.PRODUCTS]: "PRODUCTS",
  [TypeBills.CLOTHES]: "CLOTHES",
  [TypeBills.CAR]: "CAR",
  [TypeBills.INTERNET]: "INTERNET",
  [TypeBills.KINDERGARTEN]: "KINDERGARTEN",
  [TypeBills.APARTMENT]: "APARTMENT",
  [TypeBills.RESTAURANTS]: "RESTAURANTS",
  [TypeBills.TRIPS]: "TRIPS",
  [TypeBills.OTHER]: "OTHER"
};

@Component({
  selector: 'app-month-info-by-type',
  templateUrl: './month-info-by-type.component.html',
  styleUrls: ['./month-info-by-type.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: false}}
  ]
})
export class MonthInfoByTypeComponent implements OnInit{
  generalStatistics: GeneralStatisticDto[] = [];
  typeBill: string;
  public types = Object.values(TypeBills);
  public TypeMapping = TypeMapping;
  chart: any;


  constructor(private router: Router,
              private statisticService: StatisticControllerService,
              private chartService: ChartService) {
  }

  ngOnInit(): void {
  }

  return() {
    this.router.navigate(['/bills'])
  }

  returnToHomePage() {
    this.router.navigate(['/start'])
  }

  onSubmit(f: NgForm) {
    this.statisticService.getMonthStatisticByType(f.value.typeBill).subscribe(data => {
      this.generalStatistics = data;
      console.log("Month statistics: " + this.generalStatistics);
    },
      error => {
      console.log(error.error.message)
      });
  }

  getChart() {
    this.chart = this.chartService.createMonthlyChart(this.generalStatistics);
  }

}
