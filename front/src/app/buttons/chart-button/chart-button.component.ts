import {Component, Input} from '@angular/core';
import {ChartService} from "../../service/chart.service";
import {Chart} from "chart.js/auto";

@Component({
  selector: 'app-chart-button',
  templateUrl: './chart-button.component.html',
  styleUrls: ['./chart-button.component.css']
})
export class ChartButtonComponent {

  @Input() chartData: any[] = []
  @Input() valueKey: string = 'diff'
  @Input() label: string = 'Meters'
  chart: Chart;

  constructor(private chartService: ChartService) {
  }

  getChart() {
    this.chart = this.chartService.createChart(this.chartData, this.label, this.valueKey);
  }
}
