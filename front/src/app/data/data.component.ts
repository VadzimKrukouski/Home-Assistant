import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent implements OnInit {

  name = "test name";
  disabled = false;
  meterReading = 0;

  constructor(private httpClient: HttpClient,
              private router:Router,
              private activateRoute: ActivatedRoute) {

  }

  ngOnInit(): void {


    this.activateRoute.queryParams.subscribe(params => {
      this.name = params['email']
    })
  }

  changeName(): void {
    this.name = "change"

  }

  changeDisable() {
    this.disabled = !this.disabled
  }

  return() {
    this.router.navigate(['/start'])
  }

  getData() {
    this.httpClient.get<any>(environment.backURL + "/electricityMeter/2").subscribe(
      {
        next: ((response: any) => {
          console.log(response);
          this.meterReading = response.meterReading;
        }),

        error: (error => {
          console.log(error)
        })
      }
    )
  }


  createData() {
    const data = {meterReading: this.meterReading};
    const body = JSON.stringify(data);

    this.httpClient.post<any>(environment.backURL + "/electricityMeter", body, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(
      {
        next: ((response: any) => {
          console.log(response);
        }),

        error: (error => {
          console.log(error)
        })
      }
    )
  }
}
