import Chart from "chart.js";
import React from "react";

export default function StoryView() {
  React.useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: [
          "আমার সোনার...",
          "আমার সোনার...",
          "আমার সোনার...",
          "আমার সোনার...",
          "আমার সোনার...",
          "আমার সোনার...",
          "আমার সোনার...",
          "আমার সোনার...",
          "আমার সোনার...",
          "আমার সোনার...",
          "আমার সোনার...",
          "আমার সোনার..."
        ],
        datasets: [
          {
            label: "Views",
            backgroundColor: "#4a5568",
            borderColor: "#4a5568",
            data: [300, 780, 560, 340, 1000, 450, 130,1000, 450, 130,100, 450],
            fill: false,
            barThickness: 8,
          },
          {
            label: "Reviews",
            fill: false,
            backgroundColor: "#3182ce",
            borderColor: "#3182ce",
            data: [270, 680, 860, 740, 100, 40, 870,100, 40, 870,100, 40],
            barThickness: 8,
          },
          {
            label: "Likes",
            fill: false,
            backgroundColor: "#63b3ed",
            borderColor: "#63b3ed",
            data: [150, 420, 340, 560, 800, 670, 240,800, 670, 240,800, 670],
            barThickness: 8,
          },
          {
            label: "Reports",
            fill: false,
            backgroundColor: "#e53e3e",
            borderColor: "#e53e3e",
            data: [50, 120, 180, 90, 300, 210, 160,300, 210, 160,300, 210],
            barThickness: 8,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Post Views Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              display: false,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById("post-views-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, []);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full rounded">

        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-80">
            <canvas id="post-views-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
