import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

function EventsTrend() {
  const state = {
          
    series: [{
      name: 'Events Duration',
      type: 'column',
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    }, {
      name: 'Events Frequency',
      type: 'line',
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }],
    options: {
      chart: {
        type: 'line',
        toolbar: {
          show: false,
        },
      },
      stroke: {
        width: [0, 4]
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },
      labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
      xaxis: {
        type: 'category',
        labels:{
          style:{
            colors:"#fff"
          }
        }
      },
      yaxis: [{
        title: {
          text: 'Duration',
          style: {
            color: "#fff"
          }
        },
        labels:{
          style:{
            colors:"#fff"
          }
        }
      },{
        opposite: true,
        title: {
          text: 'Frequency',
          style: {
            color: "#fff"
          }
        },
        labels:{
          style:{
            show:true,
            colors: "#fff"
          }
        }
      }]
    },
  
  
  };

  return (
    <ReactApexChart
      options={state.options}
      series={state.series}
      type="line"
      height="100%"
    />
  );
}

export default EventsTrend;
