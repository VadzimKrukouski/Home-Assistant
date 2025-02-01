import {Component, Injectable, OnInit} from '@angular/core';
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

  constructor(private waterService: WaterMetersControllerService) {
  }

  ngOnInit(): void {
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

  public findMetersData(request): WaterMeterDto[] {
    this.getData(request);
    return this.meters;
  }
}
