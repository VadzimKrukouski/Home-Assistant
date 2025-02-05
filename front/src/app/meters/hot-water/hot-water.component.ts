import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {WaterMetersControllerService} from "../../api/water-meters-controller.service";
import {TypeWater} from "../meters.component";
import {WaterMeterDto} from "../../models/waterMeterDto";

@Component({
  selector: 'app-hot-water',
  templateUrl: './hot-water.component.html',
  styleUrls: ['./hot-water.component.css']
})
export class HotWaterComponent implements OnInit {
  meters: WaterMeterDto[] = [];

  constructor(private waterService: WaterMetersControllerService) {
  }

  ngOnInit(): void {
    this.getData({type: "HOT"})
  }

  getData(request) {
    this.waterService.getData(request)
      .subscribe(data => {
          this.meters = data;
        },
        error => {
          console.log(error.error.message);
        });
  }

  onSubmit(f: NgForm) {
    this.waterService.save({
      typeWater: TypeWater.HOT,
      meterReading: f.value.meterReading,
      date: new Date(f.value.date).toISOString()
    });
    f.resetForm();
  }
}
