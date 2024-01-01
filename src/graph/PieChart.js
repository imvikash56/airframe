import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = () => {
  const [chartData, setChartData] = useState({
    series: [44,55,33, 45,24],
    options: {
      chart: {
        width: 380,
        type: 'donut',
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
      legend: {
        position: 'right',
        offsetY: 0,
        height: 230,
      },
    },
  });

  return (
    <div>
      <div className="chart-wrap">
        <div id="chart">
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="donut"
            width={320}
          />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
