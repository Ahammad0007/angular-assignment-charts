import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  selectedDate;
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Time Spent' }
  ];
  public userData = [{
    name: 'ahammad',
    inTime: '2022-04-24T09:00:00',
    outTime: '2022-04-24T17:30:00',
  }, {
    name: 'Kishore',
    inTime: '2022-04-24T09:00:00',
    outTime: '2022-04-24T14:00:00',
  }, {
    name: 'Ramu',
    inTime: '2022-04-24T09:00:00',
    outTime: '2022-04-24T17:30:00',
  }, {
    name: 'ahammad',
    inTime: '2022-04-25T09:00:00',
    outTime: '2022-04-25T17:00:00',
  }, {
    name: 'Kishore',
    inTime: '2022-04-25T09:00:00',
    outTime: '2022-04-25T16:00:00',
  }, {
    name: 'Ramu',
    inTime: '2022-04-25T09:00:00',
    outTime: '2022-04-25T14:00:00',
  }, {
    name: 'ahammad',
    inTime: '2022-04-26T09:00:00',
    outTime: '2022-04-26T18:00:00',
  }, {
    name: 'Kishore',
    inTime: '2022-04-26T09:00:00',
    outTime: '2022-04-26T17:00:00',
  }, {
    name: 'Ramu',
    inTime: '2022-04-26T09:00:00',
    outTime: '2022-04-26T19:00:00',
  }, {
    name: 'ahammad',
    inTime: '2022-04-27T09:00:00',
    outTime: '2022-04-27T16:00:00',
  }, {
    name: 'Kishore',
    inTime: '2022-04-27T09:00:00',
    outTime: '2022-04-28T18:00:00',
  }, {
    name: 'Ramu',
    inTime: '2022-04-27T10:00:00',
    outTime: '2022-04-29T19:00:00',
  }];

  constructor() { }

  ngOnInit() {
    this.selectedDate = new Date().toISOString().split('T')[0];
    this.loadData();
  }

  getTimeDiff(user) {
    let diffInMilliSeconds = Math.abs((new Date(user.outTime).getTime()) - (new Date(user.inTime).getTime())) / 1000;
    const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
    diffInMilliSeconds -= hours * 3600;
    const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
    diffInMilliSeconds -= minutes * 60;
    return Number(`${hours}.${minutes}`)
  }

  loadData() {
    this.barChartLabels = []
    this.barChartData[0]['data'] = []
    this.userData.forEach((user) => {
      const inDate = new Date(user.inTime).toISOString().split('T')[0];
      if (inDate === this.selectedDate) {
        const time = this.getTimeDiff(user)
        this.barChartLabels.push(user.name)
        this.barChartData[0]['data'].push(time)  
      }
    })
  }
}

