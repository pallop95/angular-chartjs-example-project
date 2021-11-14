import { Component, Input, OnInit } from '@angular/core';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
})
export class DoughnutChartComponent implements OnInit {
  
  doughnutChartType: ChartType = 'doughnut';

  doughnutChartLabels: Label[] = ['SPD', 'CDU', 'Grüne', "Linke", "FDP", "AFD", "Andere"];

  doughnutChartData: ChartDataSets[] = [
    {
      label: 'Dataset A',
      // data: [33, 21, 9, 9, 11, 13, 5 ],
      data: [17, 25, 4, 9, 4, 9, 8, 24]
    }, {
      label: 'Dataset B',
      // data: [35, 20, 10, 10, 15, 15, 10 ],
      data: [28, 40, 6, 15, 6, 15, 14, 39]
    }, 
    {
      label: 'Dataset C',
      // data: [40, 15, 5, 15, 20, 5, 20 ],
      data: [163]
    }
  ];

  doughnutChartOption: ChartOptions = {}    

  ngOnInit() {
    this.doughnutChartData.forEach(ds => {
      ds.backgroundColor = ['red', 'black', 'green', "purple", "yellow", "blue", "grey", "orange"];
      ds.hoverBackgroundColor = ["lightgrey", "grey", "lightgrey", "grey","lightgrey", "grey", "lightgrey", "orange"];
    });
  }
}