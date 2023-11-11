import {Component, Injectable, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {WaterMetersControllerService} from "../api/water-meters-controller.service";
import {WaterMeterDto} from "../models/waterMeterDto";

export enum TypeWater {
  HOT = "HOT",
  COLD = "COLD"
}

@Injectable({providedIn: 'root'})
@Component({
  selector: 'app-meters',
  templateUrl: './meters.component.html',
  styleUrls: ['./meters.component.css']
})
export class MetersComponent implements OnInit {
  meters: WaterMeterDto[] = [];
  totalElements: number = 0;

  constructor(private router: Router,
              private waterService: WaterMetersControllerService) {
  }

  ngOnInit(): void {
  }


  openMetersPage() {

  }

  dataHotWater() {
    this.router.navigate(['/hot-water-data'])
  }

  return() {
    this.router.navigate(['/start'])
  }

  dataColdWater() {
    this.router.navigate(['/cold-water-data'])
  }

  getData(request) {
    this.waterService.getData(request)
      .subscribe(data => {
          this.meters = data;
          console.log("Meters: " + this.meters);
        },
        error => {
          console.log(error.error.message);
        });
  }

  public findMetersData(request) : WaterMeterDto[] {
    this.getData(request);
    return this.meters;
  }
}
