import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

function Gauges(props) {
  const state = {
    series: [props.data],
    options: {
      chart: {
        type: "radialBar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          hollow: {
            margin: 15,
            size: "55%",
          },
          track: {
            background: "#49516F"
          },
          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: "white",
              fontSize: "13px",
            },
            value: {
              offsetY: 10,
              color: "white",
              fontSize: "20px",
              show: true,
            },
          },
        },
      },
      fill: {
        colors: [props.color]
      },
      stroke: {
        lineCap: "round",
      },
      labels: [props.name],
    },
  };
  return (
    <ReactApexChart
      options={state.options}
      series={state.series}
      type="radialBar"
    />
  );
}

export default Gauges;
