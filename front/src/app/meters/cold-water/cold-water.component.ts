import {Component, OnInit} from '@angular/core';
import {WaterMetersControllerService} from "../../api/water-meters-controller.service";
import {TypeWater} from "../meters.component";
import {DatePipe} from "@angular/common";
import {WaterComponent} from "../water/water.component";

@Component({
  selector: 'app-cold-water',
  templateUrl: './cold-water.component.html',
  styleUrls: ['./cold-water.component.css'],
  providers: [DatePipe]
})
export class ColdWaterComponent extends WaterComponent implements OnInit {
  typeWater: TypeWater = TypeWater.COLD;

  constructor(waterService: WaterMetersControllerService,
              datePipe: DatePipe) {
    super(waterService, datePipe);
  }

  ngOnInit(): void {
    // super.getData({type: this.typeWaterInput.toString()})
  }
}
