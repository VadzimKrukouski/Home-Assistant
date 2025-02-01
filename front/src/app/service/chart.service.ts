import {Injectable} from "@angular/core";
import {Chart} from "chart.js/auto";

@Injectable({providedIn: 'root'})
export class ChartService {
  chart: any = null;
  private labeldata: any[] = [];
  private realdata: any[] = [];

  createChart(data: any[], label: string, valueKey: keyof any) : Chart {
    this.labeldata = []
    this.realdata = []
    data.forEach(item => {
      this.labeldata.push(item.date);
      this.realdata.push(item[valueKey]);
    })
    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: this.labeldata,
        datasets: [
          {
            label: label,
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

  createMonthlyChart(data: any): Chart {
    this.labeldata = []
    this.realdata = []
    data.forEach(meter => {
      this.labeldata.push(meter.date);
      this.realdata.push(meter.sum);
    })
    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: this.labeldata,
        datasets: [
          {
            label: 'Sum',
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
