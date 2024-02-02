import Chart from "chart.js";
import React from "react";

export default function LineChartComponent() {
  React.useEffect(() => {
    var config = {
      type: "line",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
        ],
        datasets: [
          {
            label: 'Revenue',
            backgroundColor: "#3182ce",
            borderColor: "#3182ce",
            data: [65, 78, 66, 44, 56, 67, 75],
            fill: false,
          },
          {
            label: 'Investment',
            fill: false,
            backgroundColor: "#aaa",
            borderColor: "#aaa",
            data: [40, 68, 86, 74, 56, 60, 87],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
          labels: {
            fontColor: "white",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "#000",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "white",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "#000",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "#aaa",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "balck",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "#ddd",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="flex flex-col relative w-full left-0 break-words">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          {/* <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              
              <h2 className="text-xl font-semibold">Sales value</h2>
            </div>
          </div> */}
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-[250px]">
            <canvas id="line-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}