import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {WaterMetersControllerService} from "../../api/water-meters-controller.service";
import {MetersComponent, TypeWater} from "../meters.component";
import {WaterMeterDto} from "../../models/waterMeterDto";
import {ChartService} from "../../service/chart.service";

@Component({
  selector: 'app-hot-water',
  templateUrl: './hot-water.component.html',
  styleUrls: ['./hot-water.component.css']
})
export class HotWaterComponent implements OnInit {
  meters: WaterMeterDto[] = [];
  chart: any;

  constructor(private router: Router,
              private waterService: WaterMetersControllerService,
              private metersComponent: MetersComponent,
              private chartService: ChartService) {
  }


  ngOnInit(): void {
    this.getData({type: "HOT"})
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
      typeWater: TypeWater.HOT,
      meterReading: f.value.meterReading,
      date: new Date(f.value.date).toISOString()
    });
    f.resetForm();
  }

  return() {
    this.router.navigate(['/meters'])
  }

  returnToHomePage() {
    this.router.navigate(['/start'])
  }

  getChart() {
    this.chart = this.chartService.createChart(this.meters);
  }
}
