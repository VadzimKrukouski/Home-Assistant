import {Injectable} from "@angular/core";
import {Chart} from "chart.js/auto";
import {GeneralStatisticDto} from "../models/GeneralStatisticDto";

@Injectable({providedIn: 'root'})
export class ChartService {
  chart: any = null;
  private labeldata: any[] = [];
  private realdata: any[] = [];

  createChart(data: any[], label: string, valueKey: keyof any): Chart {
    if (this.isGeneralStatisticArray(data)) {
      console.log("sort.....")
      data.sort((a, b) => a.date.getTime() - b.date.getTime());
    }
    data.forEach(item => {
      this.labeldata.push(item.formattedDate);
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

  private isGeneralStatisticArray(data: any[]): data is GeneralStatisticDto[] {
    return data.every(item => item &&
      (typeof item.sum === 'number' || item.sum === undefined)
    );
  }
}
