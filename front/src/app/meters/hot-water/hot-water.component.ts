import {Component, OnInit} from '@angular/core';
import {WaterMetersControllerService} from "../../api/water-meters-controller.service";
import {TypeWater} from "../meters.component";
import {WaterComponent} from "../water/water.component";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-hot-water',
  templateUrl: './hot-water.component.html',
  styleUrls: ['./hot-water.component.css'],
  providers: [DatePipe]
})
export class HotWaterComponent extends WaterComponent implements OnInit {
  typeWater: TypeWater = TypeWater.HOT;

  constructor(waterService: WaterMetersControllerService,
              datePipe: DatePipe) {
    super(waterService, datePipe)
  }

  ngOnInit(): void {
    // super.getData({type: this.typeWaterInput.toString()})

  }
}
