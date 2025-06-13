import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {BillsControllerService} from "../api/bills-controller.service";
import {DateAdapter, MAT_DATE_LOCALE} from "@angular/material/core";
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter} from "@angular/material-moment-adapter";

export enum TypeBills {
  PRODUCTS = "PRODUCTS",
  CLOTHES = "CLOTHES",
  CAR = "CAR",
  INTERNET = "INTERNET",
  KINDERGARTEN = "KINDERGARTEN",
  APARTMENT = "APARTMENT",
  RESTAURANTS = "RESTAURANTS",
  TRIPS = "TRIPS",
  OTHER = "OTHER"
}

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
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    // {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: false}}
  ]
})
export class BillsComponent implements OnInit {

  private storeName: string;
  private sum: any;
  typeBill: string;
  public TypeMapping = TypeMapping;
  public types = Object.values(TypeBills);
  public date: string;
  public description: string;

  constructor(private billsService: BillsControllerService
  ) {
  }

  ngOnInit(): void {
  }

  getStoreName(val: string) {
    this.storeName = val;
  }

  onSubmit(f: NgForm) {
    this.billsService.save({
      storeName: f.value.storeName,
      sum: f.value.sum,
      typeBills: f.value.typeBill,
      date: this.fixDate(new Date(f.value.date)),
      description: f.value.description
    }).subscribe({
      next: (response) => {
        console.log('Bill saved:', response);
        f.resetForm();
      },
      error: (error) => {
        console.error('Error saving bill:', error);
        // You could add user notification here
      }
    });
  }

  fixDate(date: Date): string {
    date.setHours(date.getHours() + 3)
    return date.toISOString();
  }
}
