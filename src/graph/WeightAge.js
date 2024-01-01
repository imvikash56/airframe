import React from 'react';
import ReactApexChart from 'react-apexcharts';

const WeightAge = () => {
  const chartState = {
    series: [{
      name: "Desktops",
      data: [10, 11, 12, 30, 29, 9, 12, 11, 14]
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: '',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={chartState.options} series={chartState.series} type="line" height={350} />
    </div>
  );
};

export default WeightAge;
