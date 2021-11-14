import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  public pieChartType: ChartType = 'pie';
  // public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  // public pieChartData = [120, 150, 180, 90];

  // dataSet
  public pieChartLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  pieChartData: ChartDataSets[] = [
    {
      label: 'Dataset A',
      data: [17, 25, 4, 9, 4, 9, 8, 24]
    }, {
      label: 'Dataset B',
      data: [28, 40, 6, 15, 6, 15, 14, 39]
    }, 
    {
      label: 'Dataset C',
      data: [163]
    }
  ];

  public pieChartOptions: ChartOptions = {
    // responsive: true,
    // legend: {
    //   position: 'top',
    // },
    // plugins: {
    //   datalabels: {
    //     formatter: (value: any, ctx: any) => {
    //       const label = ctx.chart.data.labels[ctx.dataIndex];
    //       return label;
    //     },
    //   },
    // }
  };

  constructor() { }
  ngOnInit() {
    this.pieChartData.forEach(ds => {
      ds.backgroundColor = ['red', 'black', 'green', "purple", "yellow", "blue", "grey", "orange"];
      ds.hoverBackgroundColor = ["lightgrey", "grey", "lightgrey", "grey","lightgrey", "grey", "lightgrey", "orange"];
    });
  }
}