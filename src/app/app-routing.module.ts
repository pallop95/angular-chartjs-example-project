import { PieChartTwoComponent } from './pie-chart-two/pie-chart-two.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';

const routes: Routes = [
  // { path: 'bar-chart', component:  }
  { path: 'doughnut-chart', component: DoughnutChartComponent },
  { path: 'bar-chart', component: BarChartComponent },
  { path: 'pie-chart', component: PieChartComponent },
  { path: 'pie-chart-two', component: PieChartTwoComponent },
  { path: 'radar-chart', component: RadarChartComponent },
  { path: '**', component: BarChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
