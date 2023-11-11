import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {WaterMetersControllerService} from "../../api/water-meters-controller.service";
import {MetersComponent, TypeWater} from "../meters.component";
import {WaterMeterDto} from "../../models/waterMeterDto";

@Component({
  selector: 'app-hot-water',
  templateUrl: './hot-water.component.html',
  styleUrls: ['./hot-water.component.css']
})
export class HotWaterComponent implements OnInit {
  meters: WaterMeterDto[] = [];

  constructor(private router: Router,
              private waterService: WaterMetersControllerService,
              private metersComponent: MetersComponent) {
  }


  ngOnInit(): void {
    // this.meters = this.metersComponent.findMetersData({type: "HOT"});
    this.getData({type: "HOT"})
    console.log("HWC meters = " + this.meters)
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
}
