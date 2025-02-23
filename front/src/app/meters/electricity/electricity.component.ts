import {Component, OnInit} from '@angular/core';
import {ElectricityDto} from "../../models/ElectricityDto";
import {ElectricityControllerService} from "../../api/electricity-controller.service";
import {NgForm} from "@angular/forms";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-electricity',
  templateUrl: './electricity.component.html',
  styleUrls: ['./electricity.component.css'],
  providers: [DatePipe]
})
export class ElectricityComponent implements OnInit {
  meters: ElectricityDto[] = [];

  constructor(private electricityService: ElectricityControllerService,
              private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.electricityService.getData()
      .subscribe(data => {
          this.meters = data.map(item => ({
            ...item,
            date: new Date(item.date),
            formattedDate: this.datePipe.transform(new Date(item.date), 'MMM yyyy')
          }) as ElectricityDto);
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
    this.electricityService.save({
      date: new Date(f.value.date).toISOString(),
      meterReading: f.value.meterReading
    });
    f.resetForm();
  }
}
