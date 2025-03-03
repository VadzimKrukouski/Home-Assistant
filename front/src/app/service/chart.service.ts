import {Injectable} from "@angular/core";
import {Chart} from "chart.js/auto";
import {GeneralStatisticDto} from "../models/GeneralStatisticDto";

@Injectable({providedIn: 'root'})
export class ChartService {
  chart: any = null;

  createChart(data: any[], label: string, valueKey: keyof any): Chart {
    if (this.isGeneralStatisticArray(data)) {
      data.sort((a, b) => a.date.getTime() - b.date.getTime());
    }
    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: data.map(data => data.formattedDate),
        datasets: [
          {
            label: label,
            data: data.map(data => data[valueKey]),
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
