import {Component, OnInit} from '@angular/core';
import {DateAdapter, MAT_DATE_LOCALE} from "@angular/material/core";
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter} from "@angular/material-moment-adapter";
import {NgForm} from "@angular/forms";
import {IncomeControllerService} from "../api/income-controller.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {IncomeDto} from "../models/IncomeDto";

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: false}}
  ]
})
export class IncomeComponent implements OnInit {
  private income: any;
  private date: string;
  public incomes: IncomeDto[] = [];
  public submitted = false;

  constructor(private incomeService: IncomeControllerService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    console.log('On init.....')
    this.getIncomesByMonth();
  }

  onSubmit(f: NgForm) {
    this.submitted = true;
    if (f.invalid) return;
    this.incomeService.save({
      income: f.value.income,
      date: f.value.date
    }).subscribe({
      next: (response) => {
        console.log('Income saved:', response);
        this.snackBar.open('Income was successfully saved', 'Close', {duration: 3000})
        f.resetForm();
        this.submitted = false;
      },
      error: (error) => {
        this.snackBar.open('Something went wrong', 'Close', {duration: 3000})
        console.log('Error saving income:', error)
      }
    });
  }

  private getIncomesByMonth() {
    this.incomeService.getIncomesByCurrentMonth()
      .subscribe({
        next: (data) => {
          this.incomes = data;
        },
        error: (error) => {
          console.error('Error fetching incomes:', error);
        }
      })
  }
}
