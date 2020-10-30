import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

function Timeline() {
  const state = {
    series: [
      // George Washington
      {
        name: "George Washington",
        data: [
          {
            x: "President",
            y: [
              new Date(1789, 3, 30).getTime(),
              new Date(1797, 2, 4).getTime(),
            ],
          },
        ],
      },
      // John Adams
      {
        name: "John Adams",
        data: [
          {
            x: "President",
            y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()],
          },
        ],
      },
      // Thomas Jefferson
      {
        name: "Thomas Jefferson",
        data: [
          {
            x: "President",
            y: [new Date(1801, 2, 4).getTime(), new Date(1809, 2, 4).getTime()],
          },
        ],
      },
    ],
    options: {
      chart: {
        type: "rangeBar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "100%",
          rangeBarGroupRows: true,
        },
      },
      fill: {
        type: "solid",
      },
      xaxis: {
        type: "datetime",
        axisBorder : {
          show: false
        }
      },
      yaxis: {
        show: false
      },
      grid: {
        show: false,
      },
      legend: {
        position: "bottom",
        alignment: "center",
      },
    },
  };

  return (
    <ReactApexChart
      options={state.options}
      series={state.series}
      type="rangeBar"
      height="100%"
    />
  );
}

export default Timeline;
