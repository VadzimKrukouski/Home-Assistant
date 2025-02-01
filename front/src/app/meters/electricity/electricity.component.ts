import {Component, OnInit} from '@angular/core';
import {ElectricityDto} from "../../models/ElectricityDto";
import {ElectricityControllerService} from "../../api/electricity-controller.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-electricity',
  templateUrl: './electricity.component.html',
  styleUrls: ['./electricity.component.css']
})
export class ElectricityComponent implements OnInit {
  meters: ElectricityDto[] = [];

  constructor(private electricityService: ElectricityControllerService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.electricityService.getData()
      .subscribe(data => {
          this.meters = data;
          console.log("Electricity: " + this.meters);
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
