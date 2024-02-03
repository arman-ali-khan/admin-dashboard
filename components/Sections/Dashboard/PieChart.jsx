import Chart from "chart.js";
import React from "react";

export default function PieChart() {
  React.useEffect(() => {
    let config = {
      type: "pie", // Change type to "pie" for a pie chart
      data: {
        labels: [
          "Total",
          "Published",
          "Deleted",
          "Draft",
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: [ "#23c570", "#10b981","#ef4444", "#7c3aed"],
            borderColor: "white",
            data: [78+6+4, 78, 6, 4],
            fill: false,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
      },
    };
    let ctx = document.getElementById("pie-chart").getContext("2d");
    window.myPie = new Chart(ctx, config);
  }, []);

  return (
    <>
      <div className="relative flex flex-col break-words pb-4 bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h2 className="text-blueGray-700 text-xl font-semibold">
              Total Overview
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-[350px]">
            <canvas id="pie-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
