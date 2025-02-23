import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DatePipe} from "@angular/common";
import {WaterMeterDto} from "../../models/waterMeterDto";
import {WaterMetersControllerService} from "../../api/water-meters-controller.service";
import {NgForm} from "@angular/forms";
import {TypeWater} from "../meters.component";

@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.css'],
  providers: [DatePipe]
})
export class WaterComponent implements OnChanges{
  @Input() title: string = "Water meters data";
  @Input() typeWaterInput: TypeWater;
  meters: WaterMeterDto[] = [];

  constructor(private waterService: WaterMetersControllerService,
              private datePipe: DatePipe) {
  }

  getData(request) {
    this.waterService.getData(request)
      .subscribe(data => {
          this.meters = data.map(item => ({
            ...item,
            date: new Date(item.date),
            formattedDate: this.datePipe.transform(new Date(item.date), 'MMM yyyy')
          } as WaterMeterDto));
          this.meters.sort((a, b) => {
            const dateA = typeof a.date === 'string' ? new Date(a.date) : a.date;
            const dateB = typeof b.date === 'string' ? new Date(b.date) : b.date;

            return dateB.getTime() - dateA.getTime();
          })
        },
        error => {
          console.log(error.error.message);
        });
  }

  onSubmit(f: NgForm) {
    this.waterService.save({
      typeWater: this.typeWaterInput,
      meterReading: f.value.meterReading,
      date: new Date(f.value.date).toISOString()
    });
    f.resetForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['typeWaterInput'] && this.typeWaterInput) {
      this.getData({ type: this.typeWaterInput.toString() });
    }
  }
}
