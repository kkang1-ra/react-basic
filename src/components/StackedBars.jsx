import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

function StackedBars(props) {
  const state = {
    series: [
      {
        name: "No Loss",
        data: [800, 700, 600, 500],
      },
      {
        name: "Loss",
        data: [100, 100, 100, 100],
      },
    ],
    options: {
      chart: {
        type: "bar",
        stacked: true,
        foreColor: '#fff',
        toolbar:{
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '32%',
        },
      },
      xaxis: {
        categories: ["Availabilty", "Performance", "Quality", "OEE"],
        labels: {
          style: {
            colors: "#fff",
            fontSize: '14px'
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            fontSize:'14px'
          }
        }
      },
      colors: ["#58E2C2", "#49516F"],
      legend: {
        position: "bottom",
        horizontalAlign: "center",
        fontSize: '14px',
        labels: {
          colors: "#fff"
        },
        offsetX: 40,
      },
      grid: {
        show: false,
      },
    },
  };

  return (
    <ReactApexChart
      options={state.options}
      series={state.series}
      type="bar"
      height={"100%"}
    />
  );
}

export default StackedBars;
