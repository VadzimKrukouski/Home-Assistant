import {Injectable} from "@angular/core";
import {Chart} from "chart.js/auto";

@Injectable({providedIn: 'root'})
export class ChartService {
  chart: any = null;
  private labeldata: any[] = [];
  private realdata: any[] = [];

  createChart(meters: any) : Chart {
    this.labeldata = []
    this.realdata = []
    meters.forEach(meter => {
      this.labeldata.push(meter.date);
      this.realdata.push(meter.diff);
    })
    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: this.labeldata,
        datasets: [
          {
            label: 'Electricity meters',
            data: this.realdata,
            backgroundColor: 'red',
          }
        ]
      },
      options: {
        aspectRatio: 2
      }
    });
    return this.chart;
  }
}
