import {Component, OnInit} from '@angular/core';
import {WaterMetersControllerService} from "../../api/water-meters-controller.service";
import {NgForm} from "@angular/forms";
import {TypeWater} from "../meters.component";
import {WaterMeterDto} from "../../models/waterMeterDto";

@Component({
  selector: 'app-cold-water',
  templateUrl: './cold-water.component.html',
  styleUrls: ['./cold-water.component.css']
})
export class ColdWaterComponent implements OnInit {
  meters: WaterMeterDto[] = [];

  constructor(private waterService: WaterMetersControllerService) {
  }

  ngOnInit(): void {
    this.getData({type: "COLD"})
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

  onSubmit(f: NgForm) {
    this.waterService.save({
      typeWater: TypeWater.COLD,
      meterReading: f.value.meterReading,
      date: new Date(f.value.date).toISOString()
    });
    f.resetForm();
  }
}
