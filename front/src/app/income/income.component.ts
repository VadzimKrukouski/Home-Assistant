import {Component, OnInit} from '@angular/core';
import {DateAdapter, MAT_DATE_LOCALE} from "@angular/material/core";
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter} from "@angular/material-moment-adapter";
import {NgForm} from "@angular/forms";
import {IncomeControllerService} from "../api/income-controller.service";

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: false}}
  ]
})
export class IncomeComponent implements OnInit{
  private income: any;
  private date: string;

  constructor(private incomeService: IncomeControllerService) {
  }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.incomeService.save({
      income: f.value.income,
      date: f.value.date
    });
    f.resetForm();
  }

}
